let comparaComThis = function(param){
    console.log(this === param);
}

comparaComThis(global)
comparaComThis(this)

const obj = {}
comparaComThis = comparaComThis.bind(obj)   // Mudando a referencia do this
comparaComThis(global)
comparaComThis(obj)

console.log("-- Arrow Function -- ");
// Essa função foi definida num modulo do node
// O dono da função vai ser o modulo
let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

// Mantém o this da arrow function, ou seja, continua
// com a referencia para o objeto que foi escrito
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
