const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// Provê os arquivos estáticos a partir da diretorio atual
// fontes, dados, css...
app.use(express.static('.'));
// Se vier requisição em algum formato de submit de formulario
app.use(bodyParser.urlencoded({ extended: true}));
// Se vier um JSON da requisição, transforma em objeto
app.use(bodyParser.json());

// Serve para interpretar o formulario que veio do upload
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')     // Define a pasta dos arquivos de upload
    }, 
    filename: function (req, file, callback) { // Adiciona a data no nome do arquivo
        callback(null, `${Date.now()}_${file.originalname}`)
    }
});

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err){
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluido com sucesso.')
    })
})

// Recebendo dados do formulario da pagina ==> Backend
app.post('/formulario', (req, res) => {
    res.send({
        // Pega tudo que veio do boyd da rquisição
        ...req.body,
        id: 1
    })
})

// Servidor recebe a requisição da função e retorna
// se o número passado é par ou ímpar
app.get('/parOuImpar', (req, res) => {

    /**
     * Formas de receber dados do Frontend:
     *  1 => req.body
     *  2 => req.query => Quando é passado após a '?' da consulta
     *      Exemplo: o numero passado na URL: 
     *         'localhost:8080/parOuImpar?numero=5'
     *  3 => req.params
     *      Exemplo: app.get('/parOuImpar/:numero'...)
     *         o numero passado na URL: 'localhost:8080/parOuImpar/5'
     */
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

// Se o caminho passador for '/teste' manda um 'OK'
// Só pra testar o servidor mesmo, não é utilizado no curso
// app.get('/teste', (req, res) => res.send('Ok'));
// A porta padrão geralmente é a 8080
// Servidor vai rodar na porta 8081
app.listen(8081, () => console.log('Executando...'));

// Se a porta estiver sendo usada:
//  1: Finalizar o processo que pode estar usando ela;
//  2: Definir outra porta, tal como: 8081, 8082, 8090,...