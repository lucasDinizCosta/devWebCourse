## React Web Worker
Fala galera! Tudo bom?

Nessa aula-artigo vamos falar sobre o **React Web Worker**, que aparece como **registerServiceWorker**. Muitos alunos relataram que usam um import chamado **reportWebVitals** e estavam se perguntando se tudo bem. Sim! Está ok você usar o **reportWebVitals**, ou até apagar o import por completo e não usar. Essas funções não alteram o funcionamento do projeto, você pode escolher usar ou não. Só não pode esquecer que, se você apagar o import dessas funções e não apagar a chamada, vai gerar um erro. Então cuidado com isso.

Bons estudos!

<hr>

## Atualização na criação do Projeto React
E ai pessoal, tudo bem?

Na próxima aula, é criado um projeto React utilizando os seguintes comandos:

1. `npm i -g create-react-app`
2. `create-react-app exercicios`

No entanto, alguns alunos vem relatando problemas com esta sintaxe, o que está relacionado a uma atualização de pacotes.

Segundo a documentação oficial do pacote create-react-app que pode ser acessada neste link (https://create-react-app.dev/docs/getting-started/), os comandos acima devem ser utilizados para versões do npm que sejam inferiores à versão 5.2, enquanto **para a versão 5.2 ou versões mais novas**, você deve executar o comando abaixo para criar o seu projeto React:

`npx create-react-app exercicios`

Caso você não saiba qual versão do npm você tem instalada, pode rodar o comando `npm --version` e então executar o código de criação condizente com a sua versão.

Bons estudos!!