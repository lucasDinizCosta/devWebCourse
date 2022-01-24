console.log(this === global);   // False, pois 'this' aponta pra module.exports
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function LogThis(){
    console.log("Dentro de uma função...");
    console.log(this === exports);  // Dentro de uma função o 'this' nao aponta pra exports
    console.log(this === module.exports);
    console.log(this === global);   // True, 'this' Aponta para global

    // Desse modo está adicionando no escopo global
    this.perigo = '...'
}

LogThis()