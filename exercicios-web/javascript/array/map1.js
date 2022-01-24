// Map: Serve pra fazer uma transformação no array, ou seja, mapear um array para outro
// array de mesmo tamanho mas com os dados transformados
// OBS: o MAP nao modifica o array atual, ou seja, ele gera um array novo mas preservando 
// o antigo
/**
 * map(valor, indice, arrayCompleto)
 * 
 * Exemplo:
 * Array x = [1, 2, 3]
 * x.map(+2) => [3, 4, 5]
 */

const nums = [1, 2, 3, 4, 5];

// For com propósito
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado, nums);

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado);
