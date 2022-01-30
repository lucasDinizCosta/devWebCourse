//Configurando a variavel de ambienta para trocar
// de desenvolvimento para produção
const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    // pode ser 'production', a diferença que vai ser o main.js de uma linha só
    mode: modoDev ? 'development' : 'production',    
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
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