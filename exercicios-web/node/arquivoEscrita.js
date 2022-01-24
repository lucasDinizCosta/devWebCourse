// Modulo FileSystem(FS): Responsável tanto por ler quanto escrever arquivos 
// e verificar conteúdos de uma pasta.
// Importando o módulo FileSystem que é interno do núcleo do Node
const fs = require('fs');

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!');
})