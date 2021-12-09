// Promise é utilizada de forma assincrona
// Ela tem dois caminhos: Pode ser atendida/resolvida ou rejeitada
// Exemplo: Acessar um arquivo remoto, uma das possibilidades é que o arquivo exista
// e outra é que o arquivo nao exista

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        // Para simular uma atividade que demanda de um tempo
        setTimeout(() => {
            resolve(frase)
            // reject(frase) // Precisa do catch pra tratar o caso de erro
        }, segundos * 1000)
    })  
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // Trata caso de erro