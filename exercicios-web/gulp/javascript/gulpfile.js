const { series } = require('gulp');
const gulp = require('gulp');
// Concatena os arquivos em um único
const concat = require('gulp-concat');

// Minifica os arquivos removendo espaços
// diminuir o tamanho
const uglify = require('gulp-uglify');

// traduz o codigo javascript 
// da versão mais moderna para um mais compativel
const babel = require('gulp-babel');

function transformacaoJS(cb){
    // Seleciona os arquivos javascript
    return gulp.src('src/**/*.js')
        .pipe(babel({
            // Arquivos de comentario nao serao transferidos para o arquivo final
            comments: false,
            presets: ["env"] // Pega o mais moderno do javascript
            // poderia ser 'ES2015' ou outros
        }))
        .pipe(uglify()) // Converte o codigo pra ser minificado
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
    // Ao inves de retornar a callback, pode-se retornar o workflow
}

function fim(cb){
    console.log('Fim!!!');
    return cb()
}

exports.default = series(transformacaoJS, fim)
