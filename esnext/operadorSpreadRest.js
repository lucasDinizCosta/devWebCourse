// operador ... rest(juntar)/ spread(espalhar)
// usar rest com parametro de função
// Colocar varios parametros na função e esses parametros serão agrupados em um array 
// internamente
function total(...numeros) {
    let total = 0;
    numeros.forEach((n) => (total += n));
    return total;
  }
  console.log(total(2, 3, 4, 5));

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}  // ... => Pega todos os atributos de funcionario
console.log(clone);

// usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal);