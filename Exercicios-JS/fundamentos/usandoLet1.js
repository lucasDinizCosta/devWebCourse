var numero = 1  // Tem escopo global e de função
{
    let numero = 2 
    console.log('dentro = ', numero);
}
console.log('fora =', numero);