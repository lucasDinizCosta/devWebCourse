const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c + soma()}}
// JSON é um texto em formato de dados
console.log(JSON.stringify(obj));  // Passando pra JSON

// Qualquer atributo string dentro de um arquivo JSON deve estar entre aspas duplas ""
// [] => array no json
// {} => objeto
// console.log(JSON.parse("{a: 1, b: 2, c: 3}")); // Formato invalido
// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")); // Formato invalido
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'));
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'));

/**
 * https://json5.org/
 * Site que visa propor um JSON mais moderno que aceite os elementos sem as aspas duplas
 * 
 * https://jsonformatter.curiousconcept.com/
 * https://jsonlint.com/
 * Sites que testam arquivos JSON e verificam se é valido
 */
/**
* Exemplo de JSON:
{
	"nome": "Ana",
	"idade": 56,
	"legal": true,
	"filhos": [{
		"nome": "Junior",
		"idade": 18
	}, {
		"legal": "false"
	}]
}
*/