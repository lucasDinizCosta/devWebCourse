// Função Callback: É uma função que é chamada de volta.
// É uma função passada a outra função como argumento/parametro, que é invocado
// dentro da função externa para completar algum tipo de rotina ou ação
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))