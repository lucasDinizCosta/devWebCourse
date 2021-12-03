// Forma mais clássica de exportação no node
module.exports = {
    bomDia: 'Bom dia',
    boaNoite(){
        return 'Boa noite'
    }
}

// Sempre que for atribuir um novo objeto a ser exportado deve ser utilizado
// module.exports = {...} ao invés de somente this ou exports = {...} pois ao
// importar esse modulo em outro, o objeto será undefined