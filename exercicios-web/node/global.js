// console.log(global);
// Colocando um modulo no escopo global
// Significa que uma vez que esse modulo for lido
// E for de fato adicionado no Global
// Qualquer arquivo do sistema terá acesso a 'MinhaApp'
global.MinhaApp = {
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
}

// Para evitar que um objeto global possa ser modificado
// Pode ser utilizar o Object.Freeze

/*
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})
*/