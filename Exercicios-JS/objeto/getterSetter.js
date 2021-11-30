// Por padrão o javascript nao tem variavel privada, mas por convenção, os programadores utilizam
// o '_' na frente da variavel
const sequencia = {
    _valor: 1,  // convencao para variavel privada
    get valor(){ return this._valor++ },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

// Reconhece o metodo get automaticamente
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000      // Ativa o metodo set automaticamente
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor);