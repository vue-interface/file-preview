export default {
    'file-archive': {
        extensions: ['7z', 'bz', 'bz2', 'gz', 'zip'],
    },
    'file-audio': {
        extensions: ['aac', 'mid', 'midi', 'mp3', 'oga', 'opus', 'wav', 'weba'],
        validate: mime => {
            return !!mime && mime.match(/^audio/);
        }
    },
    'file-code': {
        extensions: ['htm', 'html', 'jar', 'js', 'json', 'php', 'py', 'rb', 'vue', 'xml']
    },
    'file-excel': {
        extensions: ['xls', 'xlsx'],
    },
    'file-image': {
        extensions: ['bmp', 'gif', 'jpeg', 'jpg', 'png', 'svg', 'tif', 'tiff', 'webp'], 
        validate: mime => {
            return mime && mime.match(/^image/);
        }
    },
    'file-pdf': ['pdf'],
    'file-powerpoint': ['ppt', 'pptx'],
    'file-video': {
        extensions: ['3gp', 'avi', 'mpeg', 'ogv', 'ts', 'webm'],
        validate: mime => {
            return !!mime && mime.match(/^video/);
        }
    },
    'file-word': ['doc', 'docx'],
};