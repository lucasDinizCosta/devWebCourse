let a = 1
console.log(a);

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

// A promessa sempre devolve um único valor na hora de cumprir a promessa
// Vantagem: encadeamento de funções(operações), neste caso, o then
p
    .then((valor) => valor[0])  // Retoma o primeiro elemento do array para o próximo then
    .then((primeiro) => primeiro[0])    // Retoma o primeiro caractere da string para o próximo then
    .then((letra) => letra.toLowerCase()) // Retoma a letra em minuscula para o próximo then  
    .then((letra) => console.log(letra)) 

const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve, reject){ // se resolve e caso for rejeitado ter um caminho a seguir
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)    
    .then(letraMinuscula) 
    .then(console.log) // .then(v => console.log(v))