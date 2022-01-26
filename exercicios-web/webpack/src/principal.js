// Padrão do CommonJS ==> NodeJS
// const Pessoa = require('./pessoa')

// Usando o padrão de importação 
// do ECMAScript 2015 e não do NodeJS
// ==> NODEJS nao reconhecer o 'import'
import Pessoa from './pessoa'
// import './modulos/moduloA'
import './assets'   // importa o arquivo 'assets/index.js'

const atendente = new Pessoa
console.log(atendente.cumprimentar());