const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(m?js|jsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env', '@babel/react'],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        },
                    }
                ],

            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
        ],
    },
    resolve: {
        modules: ['node_modules', 'react'],
        extensions: ['.js', '.jsx', '.css'],
    }

};