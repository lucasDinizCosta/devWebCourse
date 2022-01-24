console.log('01)', '1' == 1);   // igualdade comparando o valor

// igualdade comparando o valor e o tipo, ou seja, estritamente igual
console.log('02)', '1' === 1);  
console.log('03)', '3' != 3);  
console.log('04)', '3' !== 3);  // estritamente diferente

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);

const d1 = new Date(0)
const d2 = new Date(0)
// Compara os endereços de memória, quando são tipos de dados mais complexos
console.log('09)', d1 === d2);
console.log('10)', d1 == d2);
console.log('11)', d1.getTime() === d2.getTime());

console.log('12)', undefined == null);
console.log('13)', undefined == undefined);
