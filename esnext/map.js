const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react);     // undefined ==> forma incorreta de acessar
console.log(tecnologias.get('react').framework); 

const chavesVariadas = new Map([
    [function (){ }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero'],
])

chavesVariadas.forEach((v1, ch) => {
    console.log(ch, v1);
})

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);         // Remove o item
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);     // Retorna o tamanho

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')    // Subsitui a chave pois é o mesmo valor
chavesVariadas.set(456, 'b')
console.log(chavesVariadas);
