// CÓDIGO NÃO EXECUTÁVEL !!!

// Procedural
// Antes tinha a programação go-to com desvios de fluxo => Código não-estruturado
// Agora, baseado no procedimento, na função, da um nome a um trecho de código e poderá ser executado
// em outros trechos de codigo
processamento(valor1, valor2, valor3)

// Orientação a Objetos (OO)
objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){
        // ...
    }
}
// Objeto funciona como uma capsula de atributos e comportamentos visando estar 
// mais próximo do mundo real
objeto.processamento()    // Foco passou a ser o objeto

// Abstração: Pegar um objeto do mundo real e traduzir para o sistema por meio de atributos
// Exemplo: Carro é composto por: Bancos, velocímetro, rodas, pneus, câmbio...

// Princípios importantes: 
//  1. abstração
//  2. encapsulamento: Ter os detalhes de implementação escondidos e fornecer uma interface 
// mais simplificada pra quem for utilizar, ou seja, deixar o mais complexo encapsulado.
//  Melhor se preocupar com a comunicação entre os objetos do que a implementação interna de cada um
//  3. herança: Relações do tipo "É um". Exemplo: Um mamífero é um animal, uma ferrari é um carro
//  4. polimorfismo: Multiplas formas(Mais comum em linguagens fortemente tipadas). A partir 
// de uma variavel mais genérica você consegue mudar. Um objeto carro pode apontar pra uma 
// ferrari, depois pra um civic e por ai vai, ou seja, é capaz de de atribuido em um variável do tipo carro
// varios tipos diferentes de carro.