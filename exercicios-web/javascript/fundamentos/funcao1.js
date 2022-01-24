//  Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3)
imprimirSoma(2) // O segundo valor vai ser undefined
imprimirSoma(2, 10, 4, 5, 6, 7, 8)  // Pega somente os dois primeiros valores passados
imprimirSoma()  // Sem valor imprime Not A Number

// Funcao com retorno
function soma(a, b = 1){    // Define um valor padrao pra b caso nao for passado como parametro
    return a + b
}
console.log(soma(2, 3));
console.log(soma(2));