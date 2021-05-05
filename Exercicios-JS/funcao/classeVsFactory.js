/* Executando no navegador:

Executando o document.getElementByTagName('body').onclick = p1.falar
Gera 'Meu nome é undefined'
Logo pode dar problema com o 'this' dentro da class Pessoa
*/
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

/* Executando no navegador:

Executando o document.getElementByTagName('body').onclick = p2.falar
Gera 'Meu nome é João'
O objeto usando a função factory tem ideia do seu contexto lexico de declaração
*/

const p2 = criarPessoa('João')
p2.falar()