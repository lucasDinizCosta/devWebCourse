// Diferença do call pro apply norteia-se basicamente pela forma
// que os parametros são passados
// Duas formas diferentes de se invocar uma função

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
// criado no escopo global só pra evitar erro na função getPreco com os this
global.preco = 20
global.desc = 0.1

console.log(getPreco());
console.log(produto.getPreco());

const carro = {preco: 49990, desc: 0.20}

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, '$'));   // call(Contexto, atributo1, atributo2...) 
console.log(getPreco.apply(global, [0.17, '$'])); // apply(Contexto, [atributo1, atributo2,...])