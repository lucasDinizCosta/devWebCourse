// Um array é dinamico no javascript
// é uma estrutura heterogênea

console.log(typeof Array, typeof new Array, typeof []);

// Forma não recomendada de criar arrays mas funciona
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados);

// Notacao recomendada
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
// Em outras linguagens daria erro ao pegar elemento de uma posição que nao existe
// Contudo, no javascript ele retorna como 'undefined'
console.log(aprovados[3]);  

aprovados[3] = 'Paulo'
// adicionar um novo elemento no final do array
aprovados.push('Abia')
console.log(aprovados.length);

// O tamanho do array passa a ser 10 e as outras posições que nao foram adicionadas serão
// undefined
aprovados[9] = 'Rafael'
console.log(aprovados.length);
console.log(aprovados[8] === undefined);
console.log(aprovados);

// Funcao que ordena o array em ordem alfabetica ou numerica
aprovados.sort()    // altera o array original
console.log(aprovados);

// Remoção de elementos
delete aprovados[1] // remove o elemento mas na posição continuara como undefined
console.log(aprovados[0]);
console.log(aprovados[1]);

aprovados = ['Bia', 'Carlos', 'Ana']
// A partir de um indice, remove tantos elementos a partir dele
aprovados.splice(1, 1) // A partir da posição 1, remove 1 elemento ==> tira o Carlos
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) // A partir da posição 1, remove 2 elementos ==> tira o Carlos e Ana
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']
// A partir da posição 1, remove 2 elementos e adiciona 2 elementos novos ==> Elemento1 e Elemento2
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') 
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']
// A partir da posição 1, remove 0 elementos e adiciona 2 elementos novos ==> Elemento1 e Elemento2
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') 
console.log(aprovados);

// Remove o ultimo elemento
aprovados.pop()
console.log(aprovados);