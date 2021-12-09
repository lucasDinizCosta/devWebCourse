// Sem promise...
const http = require('http');

// letra da turma e callback que será chamada quando o arquivo JSON for totalmente lido
const getTurma = (letra, callback) => {
    // Caso nao funcione, os arquivos tão na pasta 'usandoCallbacks-JSON-Arquivos'
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        // Chegada dos dados
        res.on('data', dados => {
            resultado += dados
        })

        // Terminou de chegar os dados
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
// Situação de 'callback hell' onde temos uma callback dentro de uma callback dentro 
// de uma callback ...
// Torna muito complicado de ler, com o promise resolve de um jeito mais elegante
getTurma('A', alunos => {
    console.log("Foi aqui");
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes);
        })
    })
})