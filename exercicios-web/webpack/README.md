## Comandos interessantes:

- `npm start && node public/principal.js` ==> Executa o node inicializando o webpack e ao final executa o código gerado na pasta `public/principal.js`

## Atualização

Por motivos de incompatibilidade de versões, a biblioteca UglifyJs não está suportando ES6. Podemos resolver esse problema trocando a biblioteca pela **Terser**, que empenhará o mesmo papel.

1. No terminal
   
`npm install terser-webpack-plugin --save-dev`


1. Em **webpack.config.js**. Importe a lib:

`const TerserPlugin = require('terser-webpack-plugin')`

3. Em optimization, apague o seguinte trecho de código:
```Javascript
new UglifyJsPlugin({
    cache: true,
    parallel: true
}),
```

E remova o import de UglifyJsPlugin

```Javascript
// Remover
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
```


4. Por fim, em plugins. Declare:

```Javascript
new TerserPlugin({
    parallel: true,
    terserOptions: {
        ecma: 6,
    },
}),
```

Com isso feito, o projeto deverá funcionar normalmente