// let e const
// let tem escopo de bloco além de escopo de função e global
{ 
    var a = 2   // Ultrapassa o bloco
    let b = 3   // Escopo de bloco
    console.log(b);
}
console.log(a);

// Template String 
// => Delimitar a string com backticks(crase: `texto`)
// => Considera tabs e quebras de linha
const produto = 'iPad'
console.log(`${produto}
é
caro!`);

// Destruturing: Retirar informações e atributos de dentro de objetos, arrays, strings
// '...' => Operador spread
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras);

const [x, y] = [1, 2]
console.log(x, y);

const [x1, , y1] = [1, 2, 3]  // Pegando o elemento 1 e o 3
console.log(x1, y1);

const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome);
