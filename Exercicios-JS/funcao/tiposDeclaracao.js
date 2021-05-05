console.log(soma(3, 4));

// Gera erro ao chamar a função expression antes da declaração
// pelo fato de só ser atribuido a variavel sub mais abaixo
// console.log(sub(3, 4));

// function declaration
function soma(x, y){
    return x + y
}

// function expression
const sub = function (x, y){
    return x - y
}

// named function expression
// unico possível beneficio seria de facilitar na hora de debugar
const mult = function mult(x, y){
    return x * y 
}