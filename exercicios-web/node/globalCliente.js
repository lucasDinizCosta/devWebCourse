require('./global')

console.log(MinhaApp.saudacao());

// Algo global que pode ser mudado de qualquer lugar é PERIGOSO
MinhaApp.nome = "Eita!"
console.log(MinhaApp.nome);

// Para evitar que um objeto global possa ser modificado
// Pode ser utilizar o Object.Freeze