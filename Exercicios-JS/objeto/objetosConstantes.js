// O objeto constante não pode ser reatribuido, mas os atributos pode
//  pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa);

// pessoa -> {...} -> {...}
// pessoa = {nome: 'Ana'}

// Objeto congelado não terá os atributos com valor alterado após o freeze
// Objeto totalmente constante, nada nele poderá ser mudado(sem adição de atributos ou remoção)
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome);

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante);