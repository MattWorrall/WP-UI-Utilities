const path = require('path'),
    webpack = require('webpack');

const PATHS = {
    src: path.join(__dirname, './src'),
    build: path.join(__dirname, './dist')
}

module.exports = {
    mode: 'development',
    entry: {
        'wp-ui-utilities': PATHS.src + '/Index.ts'
    },
    output: {
        path: PATHS.build,
        filename: 'index.js',
        library: 'WP-UI-Utilities',
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}