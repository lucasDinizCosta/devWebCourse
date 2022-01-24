// Hoisting joga a declaração das variáveis como VAR para cima
// move a declaração para o topo

console.log('a =', a);
var a = 2
console.log('a =', a);

function teste(){
    console.log('b =', b);
    var b = 2
    console.log('b =', b);
}
teste()
console.log('b =', b);