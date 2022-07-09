export default function handler(req, result){
    const codigo = req.query.codigo
    result.status(200).json({
        id: codigo,
        nome: `Maria ${codigo}`,
        // idade: 33,
        email: `mariamariamaria${codigo}@xcfmail.com`
    })
}