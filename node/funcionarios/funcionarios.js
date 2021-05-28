const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) =>{
    return func.salario < funcAtual.salario ? func : funcAtual
}
const maiorSalario = (func, funcAtual) =>{
    return func.salario > funcAtual.salario ? func : funcAtual
}

// Fazendo a requisição do json presente no servidor da Cod3r
axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    // mulher chinesa com menor salário?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    
    console.log("\t ==> MULHER CHINESA COM MENOR SALARIO: ");
    console.log(func);

    // mulher chinesa com maior salário?
    const func2 = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(maiorSalario)
    console.log("\t ==> MULHER CHINESA COM MAIOR SALARIO: ");
    console.log(func2);
})
