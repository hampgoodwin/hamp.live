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
                data: `
                    @import "@/styles/base.scss";
                `
            }
        }
    }
}