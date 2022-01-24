// Arrow Function
// São funções anonimas, ou seja, sem nome e ao final deve-se atribuir a uma variavel
const soma = (a, b) => a + b; // (a, b) => { return a + b}
console.log(soma(2, 3));

// Arrow Function (this)
// this é associado ao local no qual a função foi escrita
// Se a função foi escrita dentro de um arquivo do node, o this aponta para exports
// ou modulo.exports
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// parametro default
function log(texto = "Node") {
  // 'Node' é o valor padrao caso nao for informado um valor
  console.log(texto);
}
log();
log("Sou mais forte");

// operador rest
// Colocar varios parametros na função e esses parametros serão agrupados em um array 
// internamente
function total(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n));
  return total;
}
console.log(total(2, 3, 4, 5));
