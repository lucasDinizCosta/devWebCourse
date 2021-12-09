// ES8: Object.values/Object.entries
// Object.values => retorna um array com os valores do objeto
// Object.entries => retorna um array de chave e valor
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(Object.keys(obj));  // retorna um array com o nome dos atributos do objeto

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,   // Sem precisar colocar 'nome: nome'
    ola(){  // Sem precisar colocar 'ola: function(){'
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola());

// Class
class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'Au au!'
    }
}

console.log(new Cachorro().falar());