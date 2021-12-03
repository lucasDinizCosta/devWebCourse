const multiplicar = (n1, n2) => {
    let m1 = (n1 >= n2 ? n1 : n2)
    let m2 = (m1 == n1 ? n2 : n1)
    let cont = 0
    for(let i = 0; i < m1; i++){
        cont += m2
    }
    return cont
}

console.log(multiplicar(5, 5)) // retornará 25
console.log(multiplicar(0, 7)) // retornará 0