var path = require('path');

module.exports = {
    entry: './src/bootstrap.js',

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        modules: [ 
            path.resolve('./src'),
            "node_modules"
        ],
        extensions: ['.js']
    },
    module: {
        rules: [
            {   
                test: /\.scss$/, 
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader" 
                ]
            },
            { 
                test: /\.html$/, 
                loader: 'html-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "src"),
        compress: false,
        port: 9000,
    }
}