// Armazenando uma função em uma variável
const imprimirSoma = function(a, b){        // Recebe uma funcao anonima
    console.log(a + b);
}
imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3));

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);
imprimir2('Legal !!!')