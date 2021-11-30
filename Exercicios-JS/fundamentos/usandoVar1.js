{
  {
    {
      {
        var sera = "Sera???";
      }
    }
  }
}
// VAR: É visível para fora do bloco
console.log(sera);

function teste(){
    var local = 123;
    console.log(local);
}

teste()
// console.log(local); // O escopo da variavel VAR é limitada ao bloco dentro da função
// A variavel var é adicionada dentro do objeto Window no navegador
// Problema: Usar a variavel global e ela for sobre-escrita
