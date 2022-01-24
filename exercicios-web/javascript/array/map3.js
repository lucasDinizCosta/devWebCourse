// Recriando a função map
Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))      // Passa o valor, indice e arrayCompleto
    }
    return newArray
}

// Array de JSONs
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lápis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}',
]

console.log(carrinho);

//  Retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json) // Converte um texto pra objeto
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado);