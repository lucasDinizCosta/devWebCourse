// Array no javascript é heterogeneo, ou seja, permite adicionar
// elementos de varios tipos dentro do mesmo array

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])   // Acessando posição que nao tem elemento

valores[10] = 4
console.log(valores)    // Adiciona o elemento na posicao determinada e coloca elementos vazios
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste')
console.log(valores);

console.log(valores.pop());
delete valores[0]
console.log(valores);