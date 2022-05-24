
// Versão Atualizada do vue.config
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: [
//     'vuetify'
//   ]
// })

// Versão Legada para rodar com o Electron 5.0.0 do curso
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: { 
    electronBuilder: { 
      nodeIntegration: true 
    } 
  } 
}
