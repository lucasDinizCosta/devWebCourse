const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}
console.log(ferrari.prototype);
// Vai buscando o prototipo pai: ferrari.__proto__
// Caso contrario se nao tiver é null.
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(volvo.__proto__ === ferrari.__proto__);
// Prototipo mais alto nivel acima de objeto => null, pois Object é o maior
console.log(Object.prototype.__proto__ === null)

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);