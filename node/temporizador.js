// Primeiro é necessário instalar a dependencia do node-schedule
// => npm i node-schedule

const schedule = require('node-schedule')

// Executar a tarefa de 5 em 5 segundos as 12 horas, ignora o dia e o mes e 
// executando na terca-feira
// const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function(){
//     console.log('Executando Tarefa 1!', new Date().getSeconds())
// })

// Executar a tarefa de 5 em 5 segundos independente do dia, dia da semana e mes
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

// Temporizador padrão do javascript
setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!');
}, 20000)   // Após 20 segundos

// setImmediate => Faz na hora
// setInterval => Usado pra executar uma função de tempos em tempos

// cria uma lista de regras pra ser executado o temporizador
const regra = new schedule.RecurrenceRule() 
regra.dayOfWeek = [new schedule.Range(1, 5)]    // Segunda a sexta
// regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds());
})
