// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// http://localhost:3000/api/hello?nome=Lucas&idade=26

export default function handler(req, res) {
  res.status(200).json({ 
    name: 'Teste API',
    method: req.method,
    // params: JSON.stringify(req.query)
    nome: req.query.nome,
    idade: +req.query.idade // Pega o valor numerico
  })
}
