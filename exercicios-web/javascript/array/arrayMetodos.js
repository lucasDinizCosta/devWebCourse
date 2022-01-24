const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
// Remove o ultimo elemento do array
pilotos.pop()   // Massa quebrou o carro!
console.log(pilotos);

pilotos.push('Verstappen') // Adiciona na ultima posicao
console.log(pilotos);

pilotos.shift() // Remove o primeiro elemento
console.log(pilotos);

pilotos.unshift('Hamilton') // Adiciona elemento na primeira posicao
console.log(pilotos);

// splice pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);

// remover
pilotos.splice(3, 1)    // Massa quebrou :(
console.log(pilotos);

// pega uma partição do array
const algunsPilotos = pilotos.slice(2) // novo array
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4) // pega do indice 1 até o 3
console.log(algunsPilotos2);