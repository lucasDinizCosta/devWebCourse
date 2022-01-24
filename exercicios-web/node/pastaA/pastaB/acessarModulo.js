// O nome do modulo sendo maiusculo ou minusculo será aceito
// no MAC e no WINDOWS mas vai dar problema no LINUX
// Visto que ele diferencia maiusculo e minusculo no linux dará problema
// Contudo, no MAC e no Windows não diferencia maiusculo e minusculo
// const moduloA = require('../../moduloa')
const moduloA = require('../../moduloA')
console.log(moduloA.ola);

// Padrão index, pode servir para importar todos os modulos do projeto de uma vez 
// Pode-se importar pela pasta ao invés de especificar o arquivo: require('./pastaC') 
const c = require('./pastaC/index') 
console.log(c.ola2);

// HTTP é um módulo interno do Node
const http = require('http')
http.createServer((req, res) => {   // recebe um requisição e uma resposta
    res.write('Bom dia!')
    res.end()
}).listen(8080)         // Fica escutando a porta 8080