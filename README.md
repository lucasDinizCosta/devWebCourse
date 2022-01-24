# Curso Web Moderno Completo com Javascript - 2021
## Link de acesso:
- url: https://www.udemy.com/course/curso-web

## VSCode:

### Atalhos:
- `CTRL + ALT + N`: Executa o arquivo de código no VSCode
- `CTRL + ALT + M`: Para a execução no VSCode

### Modos alternativos de execução do Javascript
- Ferramentas Online:
  - repl.it
  - jsfiddle
- Editor de texto(VSCode, Atom,...)
- Browser(Chrome, Firefox, Brave,...)
- Node(Muito usado no backend)
### Extensões:
- CodeRunner: Permite rodar comandos javascript pelo VSCode

## Comandos:
- `npm init ` ou `yarn init` ==> Inicializa o projeto node na pasta atual, caso tenha o arquivo `package.json` será feita a instalação de todas as dependências seja com o NPM ou o YARN, caso o arquivo não exista, ele será criado.
- `npm init NomePacote` ou `yarn add NomePacote` ==> Instala um pacote no projeto através do NPM ou do YARN.
- `npm update NomePacote` ou `yarn upgrade NomePacote` ==> Atualiza um pacote no projeto.
- `npm remove NomePacote` ou `yarn remove NomePacote` ==> Remove um pacote do projeto
- `npm start` ==> Inicializa o servidor local com o NPM ou YARN.
- `npm run dev` ==> Roda a aplicação em modo de desenvolvimento('dev') executando o módulo que está no package.json na linha `"dev": `.

### Dependências importantes do Node:
- **Axios**: É um **client HTTP**. É ideal para fazer e interceptar requisições REST(GET, PUT,...). Faz requisições para obter informações de algo que está remoto. O Axios é baseado em **Promises** do javascript, ou seja, tem-se um promessa de que as requisições trarão uma informação e caso for satisfeita, será tratado os dados conforme o programador tenha solicitado. Ao utilizar promessas, o Axios pode fazer requisições de maneira assíncrona com base no `async` e o `await`.
- **Express**: É um framework que auxilia na construção de web-services do lado do backend.
  - Instalação: `npm i --save express@4.16.3 -E`
    - Instala a versao especifica 4.16.3
    - `-E` define que deve ser a versão exata
- **Lodash**: Uma biblioteca JavaScript que fornece funções úteis para tarefas comuns de programação usando o paradigma de programação funcional.
  - Instalação: `npm i lodash`
- **JSON-Server**: Dependência que permite criar um servidor local voltado para o JSON.
- **Nodemon**: Esse módulo irá monitorar todas as alterações nos arquivos de sua aplicação e reiniciar automaticamente o servidor quando for necessário. Fica fazendo Refresh na aplicação atualizando a cada mudança salva.
  - Instalação Global: `npm i -g nodemon`
  - Para rodar os scripts: `nodemon script.js`
  - Reinicia o nodemon: comando **rs**
  - Parar o nodemon: `CTRL + C`

## Pacotes, API, ou programas importantes:
### Módulos do próprio Node:
- **Node-Schedule**: Agendador de tarefas, em outras palavras, um temporizador que possibilita projetar uma tarefa para ser executada de tempos em tempos.
  - Instalação: `npm i node-schedule`
- **HTTP-Server**: Pacote que possibilita criar um servidor HTTP local para node.
  - Instalação: `npm i http-server`
  - Execução: 
    - `http-server .` ==> '.' representa a pasta atual
    - `http-server -P 9090 .` ==> '.' diretorio atual na porta '9090'
  - Desabilita o cache para atualizar a página ao salvar o arquivo: `http-server -c-1 .`
- **Body-Parser**: Serve para trabalhar com dados vindos do cliente, recebendo e trabalhando com JSON. Pega o padrão **URLENCODE** do body da requisição e trata como um JSON.
  - Instalação: `npm i --save body-parser`
- **Módulo FileSystem(fs)**: É padrão do node. Responsável tanto por ler quanto por escrever arquivos e verificar os conteúdos de uma pasta.

### Programas:
- **POSTMAN**: É um programa que possibilita fazer requisições **REST(GET, PUT,...)** de maneira mais fácil. Muito útil para testar requisições ao servidor tanto local quando já hospedado online.

## Anotações:
- **ECMAScript**: É o nome formal da linguagem Javascript. Javascript é uma linguagem fracamente tipada(tipagem dinâmica).
- Tipagem forte: É quando atribuído um tipo para a variável não poderá ser mudado.
- Qual a diferença entre o **NPM** e o **YARN**?
  - Basicamente o YARN também é um gerenciador de pacotes e foi criado pelo facebook com o objetivo de ser mais rápido e seguro que o NPM, além disso ainda possibilitar instalar pacotes offline.
- Frameworks:
  - É um arcabouço o qual a aplicação é construída em cima, através dela é possível ter uma base para construir as aplicações. há tanto Frameworks para backend com o objetivo de persistir banco de dados, por exemplo, quanto para o FrontEnd na parte visual com o Angular.
- Padrão de projeto *Chain of Responsability ou Middleware*: 
  - É um padrão muito presente na web e no node. A ideia é diminuir o acoplamento de funções garantindo uma maior liberdade e utilizando a cadeia de funções com uso de **NEXT** para indicar o próximo passo.
- O que é **AJAX**?
  - Ajax (acrônimo em língua inglesa de <em>**A**synchronous **J**avascript **a**nd **X**ML</em>, em português "Javascript Assíncrono e XML") é o uso metodológico de tecnologias como Javascript e XML, providas por navegadores, para tornar páginas Web mais interativas com o usuário, utilizando-se de solicitações assíncronas de informações.
  - A **XMLHttpRequest** (XHR) tem um papel importante na técnica de desenvolvimento web Ajax para se comunicar com os scripts do lado do servidor. Mais recentemente foi lançado o **Fetch API**, que possui funcionalidade semelhante ao XHR com linguagem em mais alto nível.
  - Com o AJAX da pra trabalhar com JSON também. Resumidamente, o AJAX é voltado para trabalhar com requisições assíncronas de maneira mais eficiente.
- O que é **GULP**?
  - Gulp.js é uma ferramenta de automatização de tarefas em JavaScript. Tarefas como minificar, otimizar e compilar arquivos, tão repetitivas e necessárias ao desenvolvimento, podem ser automatizadas com o Gulp.
  - É usado principalmente no contexto Frontend. Trabalha com plugins ideal para cada cenário.
  - Ferramentas similares:
    - GRUNT;
    - WebPack
  - Utiliza os Streams do Node.js pra escrever os arquivos diretamente no disco.
  - Plugins:
    - **GULP-UGLIFY** => Serve para minificar arquivos usando o UGLIFY.js
    - **GULP-CONCAT** => Concatena arquivos em um único arquivo.
      - Exemplo: Junta todos os arquivos .js em um arquivo único.
    - **GULP-IMAGEMIN** => Otimiza imagens PNG, JPG, GIF e SVG.
  - No arquivo **GULPFILE.js** estarão as tarefas que o programador deseja que o GULP automatize.
  - funções principais:
    - `gulp.task(name, fn)`: Irá registrar a função com um nome, podendo especificar uma dependencia caso uma tarefa seja necessario rodar antes dela.
    - `gulp.run(tasks...)`: Executa todas as tarefas com o máximo de simultaneidade.
    - `gulp.watch(glob, fn)`: Observa os arquivos indicados e quando uma alteração for feita, o gulp executará novamente a função.
    - `gulp.src(glob)`: Retorna um 'Readable Stream', ou seja, um Stream liberado para a leitura. Basicamente carrega os arquivos.
    - `gulp.dest(folder)`: Retorna um 'Writable Stream', ou seja, um Stream liberado para a escrita. Basicamente a pasta de destino onde serão salvos os arquivos.
    - 