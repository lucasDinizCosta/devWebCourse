// Array de JSONs
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lápis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}',
]

console.log(carrinho);

//  Retornar um array apenas com os preços
const precos = carrinho.map(function(e){
    return JSON.parse(e).preco
})

console.log(precos);

// Jeito feito no curso
const paraObjeto = json => JSON.parse(json) // Converte um texto pra objeto
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado);