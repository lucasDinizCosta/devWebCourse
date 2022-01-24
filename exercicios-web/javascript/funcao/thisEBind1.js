const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO

// Sempre que for olhar o 'saudacao' vai ser referente a pessoa
// Amarrando o this
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

// Função Bind: É passado uma função onde se deseja resolver o problema
// do this. A partir do Bind consegue-se amarrar a função a um contexto.