// http://localhost:3000/api/clientes

export default function handler(req, res){
    if(req.method === 'GET'){
        handleGet(req, res)
    }  
    else{
        res.status(405).send(); // URL nao suportada == Metodo nao suportado
    }
}

function handleGet(req, res){
    res.status(200).json({
        id: 3,
        nome: 'Maria',
        idade: 33,
        email: 'mariamariamaria@xcfmail.com'
    })
}