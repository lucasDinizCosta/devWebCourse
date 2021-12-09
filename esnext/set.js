// Set: é uma estrutura de conjunto não indexada que nao aceita repetição
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')          // Nao será adicionado pois nao aceita repetição

console.log(times);
console.log(times.size);
console.log(times.has('vasco'));    // Letra maiuscula influencia na busca
console.log(times.has('Vasco'));    
times.delete('Flamengo')            // Removendo elemento
console.log(times.has('Flamengo')); 

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet);