const maiorOuIgual = function(n1, n2){
    if((typeof n1 !== 'number')||(typeof n2 !== 'number')){
        return false
    }
    return n1 >= n2 ? true : false
}

console.log(maiorOuIgual(0, 0)) // retornarĂ¡ true
console.log(maiorOuIgual(0, "0")) // retornarĂ¡ false
console.log(maiorOuIgual(5, 1)) // retornarĂ¡ true