const fs = require('fs')
const path = require('path')


function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })
        console.log('Depois de ler');
    })
}

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
    .then(conteudo => conteudo.split('\r\n'))  // quebra o conteudo em um array com as linhas do arquivo
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)