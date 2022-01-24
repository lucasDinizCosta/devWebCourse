function tratarErroELancar(erro){
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!!');
    }
    catch(e){
        tratarErroELancar(e)
    } finally{
        // Executa de qualquer forma, tendo erro no try ou depois de tratar no catch
        console.log('final');
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj);