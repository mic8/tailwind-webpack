const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'sass-loader',
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' },
                { from: 'src/index.html', to: 'index.html' },
            ],
        }),
    ],
    watch: true,
}
