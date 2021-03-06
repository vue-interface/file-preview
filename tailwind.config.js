const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: false,
    corePlugins: {
        container: false,
    },
    plugins: [
        require('@vue-interface/progress-bar/tailwindcss'),
        require('@vue-interface/variant/tailwindcss'),
    ]
};