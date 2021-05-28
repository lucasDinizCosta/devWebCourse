// O Cache faz referencia para o mesmo objeto
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// Recebendo o objeto da função factory que cria um objeto novo
// Driblando essa ideia do cache
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)