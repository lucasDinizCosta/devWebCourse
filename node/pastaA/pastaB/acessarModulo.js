// O nome do modulo sendo maiusculo ou minusculo será aceito
// no MAC e no WINDOWS mas vai dar problema no LINUX
// Visto que ele diferencia maiusculo e minusculo 
// const moduloA = require('../../moduloa')
const moduloA = require('../../moduloA')
console.log(moduloA.ola);

const c = require('./pastaC/index')
console.log(c.ola2);

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)