const path = require('path')

module.exports = {
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 800,
            aggregateTimeout: 300,
        };
        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'pages')]
    }
}
