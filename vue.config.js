var path = require('path');

module.exports = {
    publicPath: './',
    configureWebpack: {
        resolve: {
            alias: {
               
            },
        },
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/styles/base.scss";
                `
            }
        }
    }
}