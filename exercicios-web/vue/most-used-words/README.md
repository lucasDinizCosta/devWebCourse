# most-used-words

##  Observações Importantes
- Para fazer essa aplicação em ElectronJS é necessário a instalação do CLI(Command Line Interface) do Vue.
  - `npm i -g @vue/cli`
- Erro ao utilizar o "IPCRenderer" no electron 13.1, versão diferente do curso da Cod3r, como alternativa seria ajustar a versão no package.json do electron para '^5.0.0'. Além disso foi necessário modificar o arquivo **vue.config.js** para não usar a variavel com elementos do CLI mas sim somente o module.exports.

## Comandos utilizados:
- `vue create most-used-words`
- `vue add vuetify`: Adiciona o Vuetify no CLI do Vue de forma "global"
- `vue add electron-builder`: Adiciona o electron-builder no CLI do Vue de forma "global"
- `npm run electron:serve`

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
