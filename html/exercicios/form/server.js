// Importando o express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

// Pega os dados adicionados via formulario
app.post('/usuarios', (req, resp) => {
    console.log(req.body); // dados do formulario
    // Se os dados viessem por um 'GET'
    console.log(req.query);
    resp.send('<h1>Parabéns. Usuário Incluído!</h1>')
})

// Pega os dados atualizados
app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id); 
    console.log(req.body); // dados do formulario
    resp.send('<h1>Parabéns. Usuário Alterado!</h1>')
})

app.listen(3003)