<template>
    <div class="file-preview" :class="{'has-image': !!data}">
        <div class="file-preview-inner">
            <a v-if="closeable" href="#" class="file-preview-close" @click.prevent="$emit('close', $event, file)">
                <font-awesome-icon icon="times-circle" />
            </a>

            <slot name="icon" v-bind="this">
                <div v-if="url || data && isImage" class="file-preview-image">
                    <img :src="url || data" class="file-preview-thumbnail">
                </div>
                <div v-else class="file-preview-icon">
                    <font-awesome-icon :icon="['far', computedIcon]" />
                </div>
            </slot>

            <slot name="progress" v-bind="this">
                <div 
                    v-if="typeof percentLoaded === 'number'"
                    class="file-preview-progress">
                    <progress-bar
                        variant="primary"
                        height="10px"
                        :value="percentLoaded" />
                </div>
            </slot>

            <slot />
            
            <div class="file-preview-filename" v-html="computedName" />
            <div class="file-preview-filesize">
                ({{ computedSize }})
            </div>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { icons } from './icons';
import { ProgressBar } from '@vue-interface/progress-bar';

import {
    faFileAlt,
    faFileArchive,
    faFileAudio,
    faFileCode,
    faFileExcel,
    faFileImage, 
    faFilePdf,
    faFilePowerpoint,
    faFileVideo,
    faFileWord
} from '@fortawesome/free-regular-svg-icons';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

library.add(
    faFileAlt,
    faFileArchive,
    faFileAudio, 
    faFileCode,
    faFileExcel,
    faFileImage, 
    faFilePdf, 
    faFilePowerpoint, 
    faFileVideo,
    faFileWord,
    faTimesCircle
);

export default {

    name: 'FilePreview',

    components: {
        ProgressBar,
        FontAwesomeIcon
    },

    directives: {
        ready: {
            inserted(el, binding, vnode) {
                if(typeof binding.value === 'function') {
                    vnode.context.$nextTick(binding.value);
                }
            }
        }
    },

    props: {

        /**
         * Hide the close button for the preview
         *
         * @property Object
         */
        closeable: {
            type: Boolean,
            default: true
        },

        /**
         * The file extension.
         * 
         * @property {String}
         */
        extension: String,

        /**
         * The uploaded File object
         *
         * @property Object
         */
        file: Blob,

        /**
         * The mime type.
         * 
         * @property {String}
         */
        mime: String,

        /**
         * The file name.
         * 
         * @property {String}
         */
        filename: String,

        /**
         * Disable the image preview and use an icon instead.
         * 
         * @property {Boolean}
         */
        preview: {
            type: Boolean,
            default: true
        },

        /**
         * The file size.
         * 
         * @property {Number}
         */
        size: Number,

        /**
         * The image URL.
         * 
         * @property {String}
         */
        url: String,

    },

    data() {
        return {
            data: null,
            loading: false,
            percentLoaded: null,
        };
    },

    computed: {

        /**
         * Get the file extension.
         *
         * @property String
        */
        computedExtension() {
            return this.file instanceof Blob
                ? this.file.name.split('.').pop().toLowerCase()
                : this.extension;
        },

        /**
         * Get the icon based on the extension.
         *
         * @property String
         */
        computedIcon() {
            const match = this.icon();

            if(match) {
                return match;
            }

            return 'file-alt';
        },

        /**
         * Get the file type.
         *
         * @property String
         */
        computedMime() {
            return this.file instanceof Blob ? this.file.type : this.mime;
        },

        /**
         * Get the file name.
         *
         * @property String
         */
        computedName() {
            return this.file instanceof Blob ? this.file.name : this.filename;
        },

        /**
         * Get the formatted file size.
         *
         * @property String
         */
        computedSize() {
            return this.bytesToSize(
                this.file ? this.file.size : (this.size || 0)
            );
        },

        computedSrc() {
            if(this.file instanceof Blob) {
                return ;
            }

            return this.url;
        },

        /**
         * Check to see if the file is an image.
         *
         * @property String
         */
        isImage() {
            return this.file && this.file.type.match(/^image/);
        }
    },

    mounted() {
        if(this.file) {
            this.readFile(this.file);
        }
    },

    methods: {

        readFile(file) {
            return new Promise((resolve, reject) => {
                this.data = null;
                this.loading = true;
                this.percentLoaded = 0;

                const started = new Date;
                const reader = new FileReader();

                reader.onprogress = e => this.onProgress(e);
                reader.onload = e => {
                    setTimeout(() => {
                        resolve(e.target.result);
                    }, 666 - (((new Date().getTime() - started.getTime()) / 1000)));
                };
                reader.onerror = e => reject(e);                
                reader.readAsDataURL(file);
            }).then(data => {
                this.$emit('read', data);
                this.percentLoaded = null;
                
                return this.data = data;
            }, e => {
                this.$emit('error', e);
            });
        },

        bytesToSize(bytes) {
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if(bytes === 0) return '0 Byte';
            var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
        },

        icon() {
            for(let [key, { extensions, validate }] of Object.entries(icons)) {
                if(validate && validate(this.computedMime)) {
                    return key;
                }

                if(extensions && extensions.indexOf(this.computedExtension) > -1) {
                    return key;
                }
            }
        },

        // onLoad(event) {
        //     console.log('onload', event);
        //     this.loaded = true;
        //     this.$emit('loaded');
        // },

        // onLoadImage() {
        //     // this.loading = false;
        //     // this.loaded = true;
        // },

        onProgress(e) {
            const progress = parseInt((e.loaded / e.total) * 100, 10);

            this.$emit('progress', progress);
            this.percentLoaded = progress;
        }

    }

};
</script>

<style>
.file-preview {
    display: flex;
}

.file-preview .file-preview-inner {
    position: relative;
    width: 10rem;
}

.file-preview .file-preview-close {
    top: 0;
    right: 0;
    padding: 0;
    width: 24px;
    height: 24px;
    position: absolute;
    background: white;
    border-radius: 100%;
    transform: translate(33%, -33%);
}

.file-preview .file-preview-close svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 24px;
    text-align: center;
}

.file-preview .file-preview-icon {
    text-align: center;
    font-size: 60px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-content: center;
}

.file-preview .file-preview-thumbnail {
    object-fit: cover;
    padding: 1rem;
    height: 10rem;
    width: 100%;
}

.file-preview .file-preview-filename {
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.file-preview .file-preview-filename,
.file-preview .file-preview-filesize {
    text-align: center;
}

.file-preview .file-preview-progress {
    margin: .5rem 0;
}

.file-preview .progress:not(:last-child) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.file-preview .progress:not(:first-child) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>