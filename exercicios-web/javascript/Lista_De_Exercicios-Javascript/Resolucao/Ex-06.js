const inverso = function(elemento){
    if(typeof elemento === "boolean"){
        return !elemento
    }
    else if(typeof elemento === "number"){
        return elemento * -1 
    }
    else{
        return "booleano ou número esperados, mas o parâmetro é do tipo " + typeof elemento
    }
}

console.log(inverso(true)) // retornará false
console.log(inverso("6")) // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
console.log(inverso(-2000)) // retornará 2000
console.log(inverso("programação")) // retornará "booleano ou números esperado, mas o parâmetro é do tipo string"