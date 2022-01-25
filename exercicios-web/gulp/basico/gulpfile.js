const gulp = require('gulp');
const {series, parallel} = require('gulp');
// const series = gulp.series;

const antes1 = cb => {
    console.log('Tarefa Antes 1');
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2');
    return cb()
}

function copiar(cb) {
    // Pipe: Aplica transformações nos arquivos de entrada
    // src: Arquivos de entrada

    // Por array de caminhos dos arquivos
    // gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])

    // Por expressao
    // Copia qualquer arquivo dentro da pastaA que tenha txt no final
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
        // .pipe(imagePelaMetade())
        // .pipe(imageEmPretoEBranco())
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // .pipe(transformacaoC())
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim');
    return cb()
}

// O GULP precisa que passe uma 'task default'
module.exports.default = series(
    parallel(antes1,antes2),        // Funções em paralelo
    copiar,
    fim,
)