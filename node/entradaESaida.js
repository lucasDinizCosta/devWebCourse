// Fazer a leitura de entrada via teclado, além disso, a possibilidade de passar flags ao
// executar o módulo, como "node entradaESaida.js -a"

// Carrega a dependencia do sistema operacional para quebras de linha
const os = require('os');   

// Captura a flag '-a' pelo terminal
const anonimo = process.argv.indexOf('-a') !== -1
if(anonimo){
    process.stdout.write('Fala Anônimo!\n')
    process.exit();      // Finalizando a aplicação
} else{
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {  // Fazendo leitura de entrada pelo teclado

        // Removendo a quebra de linha independente do Sistema operacional
        const nome = data.toString().replace(`${os.EOL}`, '')  
        process.stdout.write(`Fala ${nome}!!${os.EOL}`)
        process.exit();      // Finalizando a aplicação

        // Porque foi optado usar a dependencia OS pois estava gerando o seguinte erro ao usar o '\n'
        /**
         * Informe o seu nome: Lucas
         * !!la Lucas
         */
    })
}