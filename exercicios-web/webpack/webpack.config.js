const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // pode ser 'production', a diferença que vai ser o main.js de uma linha só
    mode: 'development',    
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        // Regras dos loaders
        rules: [{
            test: /\.s?[ac]ss$/, // Expressão regular que pega: CSS, SCSS, SASS
            use: [
                MiniCSSExtractPlugin.loader, // Extrai o CSS para fora
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }]
    }
}