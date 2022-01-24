console.log(module.exports === this)    // this é referencia para module.exports
console.log(module.exports === exports) // exports é referencia para module.exports
// O this e o exports são apenas duas referencias para o mesmo objeto module.exports
this.a = 1
exports.b = 2
module.exports.c = 3
// a, b e c ficarão visíveis fora

// Mesmo atribuindo null para o exports, o module.exports continua apontando para o módulo
// exports é apenas uma variável que aponta para o module.exports
exports = null              
console.log(module.exports)

// Ao exportar nao vai aparecer corretamente, o certo nesse caso, é usar
// module.exports
exports = {
    nome: 'Teste'
}

console.log(module.exports)

// Sempre que for querer atribuir um novo objeto a ser exportado 
// deve-se usar o module.exports
module.exports = {publico: true}