const alunos = [
    { nome: "Joao", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.8, bolsista: false },
    { nome: "Ana", nota: 8.7, bolsista: true }
];

const alunosBolsa = alunos.map(a => a.bolsista)

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (acumulador, atual) => (acumulador && atual)
let resultado = alunosBolsa.reduce(todosBolsistas)
console.log(resultado);

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (acumulador, atual) => (acumulador || atual)
resultado = alunosBolsa.reduce(algumBolsista)
console.log(resultado);

