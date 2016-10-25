var webpack = require('webpack');

module.exports = {
    //dependencies are found recursively from the entry file and are output to the output dir
    entry: './js/main.js',
    output: {
        library: 'Beer',
        libraryTarget: 'umd', //universal module definition, works with both commonjs and AMD modules consumers
        path: './dist',
        filename: 'bundle.js' //final file to be consumed in index.html
    },
    module: {
        //loaders allow you to preprocess files as you 'require' or 'load' them.  they can be thought of
        //as tasks and can transform files as needed (like babel)
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    }
};