const alunos = [
    { nome: "Joao", nota: 7.9},
    { nome: "Maria", nota: 9.2},
];

// Calcular a média
// Imperativo
// No imperativo o como deve ser feito tem mais prioridade do que ser feito em si, ou seja,
// um passo a passo
let total1 = 0
for(let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length);

// Declarativo
// Estas funções podem ser utilizadas em outros contextos, por isso o declarativo é melhor
// A forma como vai obter os resultados nao importa, o principal é obter o resultado esperado
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length);

// select codigo, nome, email from clientes where ativo = 1
// O codigo SQL é declarativo pois o objetivo é ter o resultado independente de como
// é feita a operação