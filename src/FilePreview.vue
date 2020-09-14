<template>
    <div class="file-preview" :class="{'has-image': !!image}">
        <div class="file-preview-inner">
            <a v-if="loaded === true && closeable" href="#" class="file-preview-close" @click.prevent="e => $emit('close', e, file)">
                <font-awesome-icon icon="times-circle" />
            </a>

            <div v-if="!!url || isImage" class="file-preview-image">
                <img v-if="!!url || !!image" :src="url || image" class="file-preview-thumbnail" @load="onLoad">
            </div>

            <div v-else v-ready="onLoad" class="file-preview-icon">
                <font-awesome-icon :icon="isVideo ? 'file-video' : 'file-alt'" />
            </div>

            <div class="mt-2 mb-1">
                <progress-bar
                    v-if="isImage && typeof loaded === 'number'"
                    v-ready="readFile"
                    :value="loaded"
                    :height="10" />

                <progress-bar
                    v-if="progress"
                    variant="success"
                    :value="progress"
                    :height="10" />
            </div>

            <slot />
            
            <div class="file-preview-filename" v-html="computedName" />
            <div class="file-preview-filesize">
                ({{ computedSize }})
            </div>
        </div>
    </div>
</template>

<script>
import ProgressBar from '@vue-interface/progress-bar';
import { isFunction } from '@vue-interface/utils';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFileAlt, faFileVideo, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faFileAlt);
library.add(faFileVideo);
library.add(faTimesCircle);

export default {

    name: 'FilePreview',

    components: {
        ProgressBar,
        FontAwesomeIcon
    },

    directives: {
        ready: {
            inserted(el, binding, vnode) {
                if(isFunction(binding.value)) {
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
         * The last modified date.
         * 
         * @property {Date}
         */
        lastModified: Date,

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
        name: String,

        /**
         * Progress that can be passed from a parent comparent, for instance
         * use to show an ajax request with a single progress bar. If a progress
         * value is passed, even a 0, the progress bar will not be used to show
         * the progress of the file reader.
         * 
         * @property {Number}
         */
        progress: Number,

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
            image: null,
            loaded: this.file instanceof Blob ? 0 : false
        };
    },

    computed: {

        /**
         * Get the file name.
         *
         * @property String
         */
        computedName() {
            return this.file instanceof Blob ? this.file.name : this.name;
        },

        /**
         * Get the file extension.
         *
         * @property String
        */
        computedExtension() {
            return this.file instanceof Blob ? this.file.name.split('.').pop().toLowerCase() : this.extension;
        },

        /**
         * Get the formatted file size.
         *
         * @property String
         */
        computedSize() {
            return this.file || this.size ? this.bytesToSize(this.file ? this.file.size : this.size) : '0 Bytes';
        },

        /**
         * Get the file type.
         *
         * @property String
         */
        computedType() {
            return this.file instanceof Blob ? this.file.type : this.mime;
        },

        /**
         * Check to see if the file is an image.
         *
         * @property String
         */
        isImage() {
            return this.file && this.file.type.match(/^image/);
        },

        /**
         * Check to see if the file is a video.
         *
         * @property String
         */
        isVideo() {
            return this.file && this.file.type.match(/^video/);
        },

        /**
         * Get the last time the file was modified (as timestamp)
         *
         * @property Number
         */
        cimputedLastModified() {
            return this.file instanceof Blob ? this.file.lastModified : this.lastModified && this.lastModified.getTime();
        },

        /**
         * Get the last time the file was modified (as Date)
         *
         * @property Date
         */
        computedLastModifiedDate() {
            return this.file instanceof Blob ? this.file.lastModifiedDate : this.lastModified;
        }

    },

    methods: {

        readFile() {
            const start = new Date().getTime();
            const reader = new FileReader();
            
            this.loaded = 0;

            reader.onprogress = e => {
                if(e.lengthComputable) {
                    this.$emit('progress', this.loaded = parseInt((e.loaded / e.total) * 100, 10));
                }
            };

            reader.onload = e => {
                this.$emit('read', event);

                setTimeout(() => {
                    this.image = e.target.result;
                }, 500 - (((new Date().getTime() - start) / 1000)));
            };
            
            reader.onerror = e => {
                this.$emit('error', error);
            };

            reader.readAsDataURL(this.file);
        },

        bytesToSize(bytes) {
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if(bytes === 0) return '0 Byte';
            var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
        },

        onLoad(event) {
            this.loaded = true;
            this.$emit('loaded');
        }

    }

};
</script>

<style>
.file-preview {
    width: 100%;
}

.file-preview .file-preview-inner {
    position: relative;
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
}

.file-preview .file-preview-thumbnail {
    width: 100%;
    max-width: 100%;
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

.file-preview .progress:not(:last-child) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.file-preview .progress:not(:first-child) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>