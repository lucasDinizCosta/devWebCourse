const webpack = require('webpack');

module.exports = {
    // pode ser 'production', a diferença que vai ser o main.js de uma linha só
    mode: 'development',    
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    module: {
        // Regras dos loaders
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
            ]
        }]
    }
}