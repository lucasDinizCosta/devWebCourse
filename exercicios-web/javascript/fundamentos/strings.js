const escola = "Cod3r"
console.log(escola.charAt(4))
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('3'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('Escola '.concat(escola).concat("!"));
console.log(escola.replace(3, 'e'));

console.log('Ana,Maria,Pedro'.split(','));  // Gera um array

// Utiliza REGEX
console.log(escola.replace(/\d/, 'e')) // Substitui todos os digitos do texto por 'e'
console.log(escola.replace(/\w/, 'e')) // Substitui o primeiro digito do texto por 'e'
console.log(escola.replace(/\w/g, 'e')) // Substitui tudo por 'e'