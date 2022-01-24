// Com promise...
const http = require('http');

// letra da turma
const getTurma = (letra) => {
    // Caso nao funcione, os arquivos tão na pasta 'usandoCallbacks-JSON-Arquivos'
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            // Chegada dos dados
            res.on('data', dados => {
                resultado += dados
            })
    
            // Terminou de chegar os dados
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                }
                catch(e){
                    reject(e)
                }
            })
        })
    })
}

// Recurso do ES8
// Objetivo de simplificar o uso de promises...
// Algo como simplificar o codigo assincrono para ser algo próximo do sincrono
// ------
// A palavra await só vai funcionar em funções que tiverem o async
let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
} // retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
