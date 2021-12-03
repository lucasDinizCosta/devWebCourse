// A aplicação que tem comunicação
// porta: é um processo dentro do computador. Para se comunicar além do IP também é
// necessário a porta e essa porta é única por processo. Basicamente é associação de um
// número com um processo

const porta = 3003;

const express = require('express');
const app = express();
const bancoDeDados = require('./bancoDeDados') // Importando o modulo do banco de dados criado

/**
 * Express v4.16.0 e superior ==> Corrige o Erro do bodyParser deprecated
 * importação:
 * const bodyParser = require('body-parser');
 * para usar seria como: 
 * app.use(bodyParser.json());
 * app.use(bodyParser.urlencoded({ extended: true }));
 */
// --------------------------
app.use(express.json());
// Para qualquer requisição feita no servidor será passado por este middleware
app.use(express.urlencoded({
  extended: true
}));
// --------------------------

// Exemplificando a ideia de Middleware
// app.get("/produtos", (req, res, next) => {
//     console.log('Middleware 1...'); 
//     next()   // É necessario pra ele responder a requisição e continuar
// });

// Retorna todos os produtos
app.get("/produtos", (req, res, next) => {
    // Envia uma resposta
    // res.send({ nome: "Notebook", preco: 123.45 }); // Convertendo para JSON
    
    // Retornando a lista de produtos
    res.send(bancoDeDados.getProdutos())
});

// o ':' apenas indica o numero do produto, por exemplo, será retornado o produto 1 caso
// tenha informado '/produto/1'
// Retorna um produto com determinado ID
app.get('/produtos/:id', (req, res, next) => {
    // pega o ID passado na URL da requisição para retornar o produto
    res.send(bancoDeDados.getProdutos(req.params.id))
})

// Adiciona produto na base
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
    })
    res.send(produto)   // Converte o objeto para JSON
})

// Modifica os dados de um produto
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco,
    })
    res.send(produto)   // Converte o objeto para JSON
})

// Remove um produto
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)   // Converte o objeto para JSON
})


// Usando o "Use" ele será aceito para qualquer requisição independente da URL
// app.use((req, res, next) => {
//     // Envia uma resposta
//     res.send({ nome: "Notebook", preco: 123.45 }); // Convertendo para JSON
// });

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
})
