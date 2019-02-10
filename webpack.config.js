let path = require('path');
let conf = {
    entry: ['babel-polyfill','./index.js'],

    output: {
        path: path.resolve(__dirname, './js'),
        filename: 'main.js',
        publicPath: 'js/',
    },

    devServer: {
        overlay: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-syntax-jsx',
                            ['@babel/plugin-transform-react-jsx', { 'pragma': 'JSXTransform' }]
                        ]
                    }
                }
            }
        ]
    }
}

module.exports = (env, options) => {
    conf.devtool = options.mode == 'production' ? '' : 'cheap-module-eval-source-map';
    return conf;
};