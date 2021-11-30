const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
// Lista o nome dos atributos que tem no objeto
console.log(Object.keys(pessoa));
// Lista os valores dos atributos que tem no objeto
console.log(Object.values(pessoa));
// Lista um array com todos os atributos e valores que tem no objeto
console.log(Object.entries(pessoa));
// Percorrendo a lista de atributos com um forEach
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
})
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})
// adicionando um atributo
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,       // Se o atributo permite ser listado na lista de keys
    writable: false,        // Se o atributo permite ser modificado
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
// Concatena a lista de atributos de o2 com o1 e dest e adiciona em obj
// *** Se o atributo tiver o mesmo nome, o ultimo valor será o que irá se manter
const obj = Object.assign(dest, o1, o2)
console.log(obj);

Object.freeze(obj)
obj.c = 1234
console.log(obj);