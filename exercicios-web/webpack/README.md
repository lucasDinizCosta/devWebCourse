## Comandos interessantes:

- `npm start && node public/principal.js` ==> Executa o node inicializando o webpack e ao final executa o código gerado na pasta `public/principal.js`
- `webpack-dev-server` ==> É um webserver voltado para o desenvolvimento e não a produção. O Objetivo dele é atualizar os arquivos da build a medida que forem atualizados

## Erros
- `webpack@"^5.1.0" from terser-webpack-plugin@5.3.0`:
  - Opte por instalar a versão 4.2.3
  - `npm i -s terser-webpack-plugin@4.2.3`

## Atualização

Por motivos de incompatibilidade de versões, a biblioteca UglifyJs não está suportando ES6. Podemos resolver esse problema trocando a biblioteca pela **Terser**, que empenhará o mesmo papel.

1. No terminal
   
`npm install terser-webpack-plugin --save-dev`


1. Em **webpack.config.js**. Importe a lib:

```Javascript
const TerserPlugin = require('terser-webpack-plugin')
```

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


1. Por fim, em plugins. Declare:

```Javascript
new TerserPlugin({
    parallel: true,
    terserOptions: {
        ecma: 6,
    },
}),
```

Com isso feito, o projeto deverá funcionar normalmente