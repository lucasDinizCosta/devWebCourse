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

let nomes = []

// Utilizando uma cadeia de promises -- Sem otimização
// Chamada em sequencial
// getTurma('A').then(alunos => {
//     console.log("Foi aqui");
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes);
//         })
//     })
// })

// Utilizando uma cadeia de promises -- Com otimização
// Chamada em paralelo -- mais rapido
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))   // Gera um array com todos os alunos
    .then(alunos => alunos.map(alunos => alunos.nome)) // Retorna no array o nome dos alunos
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))         // Tratamento de erros

// Teste do caso de cair no reject
getTurma('D').catch(e => console.log(e.message))