const estaEntre = function(numero, maximo, minimo, inclusivo){
    if(inclusivo){
        if(numero >= minimo && numero <= maximo ){
            return true
        }
        return false
    }
    else {
        if(numero > minimo && numero < maximo ){
            return true
        }
        return false
    }
}


console.log(estaEntre(70, 100, 50)) // retornarĂ¡ true
console.log(estaEntre(16, 100, 160)) // retornarĂ¡ false
console.log(estaEntre(3, 150, 3)) // retornarĂ¡ false
console.log(estaEntre(3, 150, 3, true)) // retornarĂ¡ true