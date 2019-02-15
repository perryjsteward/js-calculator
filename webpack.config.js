module.exports = {
    entry: './index.js',
    output: {
        filename: './calc.bundle.js',
        library: 'calc',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: `typeof self !== 'undefined' ? self : this`
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    mode: 'production'
};