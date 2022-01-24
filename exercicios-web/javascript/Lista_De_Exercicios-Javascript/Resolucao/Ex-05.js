const maiorOuIgual = function(n1, n2){
    if((typeof n1 !== 'number')||(typeof n2 !== 'number')){
        return false
    }
    return n1 >= n2 ? true : false
}

console.log(maiorOuIgual(0, 0)) // retornará true
console.log(maiorOuIgual(0, "0")) // retornará false
console.log(maiorOuIgual(5, 1)) // retornará true