function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro!')
            }
            else{
                resolve(valor)
            }
        }
        catch(e){
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`) // Tratamento de erro específico deste then, o catch nao sera chamado
    )
    .then(() => console.log('Quase Fim!'))    
    .catch(err => console.log(`Erro: ${err}`))  // Tratando exceção do erro no promise
    .then(() => console.log('Fim!'))    // Após o catch aqui nao chega mais valor nenhum