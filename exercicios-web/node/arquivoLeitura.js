// Modulo FileSystem(FS): Responsável tanto por ler quanto escrever arquivos 
// e verificar conteúdos de uma pasta.
// Importando o módulo FileSystem que é interno do núcleo do Node
const fs = require('fs');

// __dirname: Constante do node que pega o diretorio atual
const caminho = __dirname + '/arquivo.json';

// ** Tomar cuidado ao fazer a leitura sincrona para arquivos pesados pois irá ficar
// travando o eventLoop esperando ler o arquivo completamente

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')   // caminho e o encode do arquivo
console.log(conteudo);

// assincrono... ==> Mais interessante
// caminho, encode, funcao callback que tratará o conteúdo ao ler o arquivo
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`);
}) 

// Especificamente para os arquivos do JSON tem um metodo mais facil de leitura e escrita
const config = require('./arquivo.json')
console.log(config.db);

// Leitura de diretorios => Mostrando os arquivos
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdos da pasta...');
    console.log(arquivos);
})