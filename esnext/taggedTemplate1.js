// Tagged templates - processa o template dentro de uma função
// parte, valor, parte,valor ... => Remonta a string original inteira
function tag(partes, ...valores){
    console.log(partes);
    console.log(valores);
    return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`);