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
- Editor de texto (VSCode, Atom,...)
- Browser (Chrome, Firefox, Brave,...)
- Node (Muito usado no backend)
### Extensões:
- CodeRunner: Permite rodar comandos javascript pelo VSCode

## Comandos do NPM ou Yarn:
- `npm init`(`npm i`) ou `yarn init`(`yarn i`) ==> Inicializa o projeto node na pasta atual, caso tenha o arquivo `package.json` será feita a instalação de todas as dependências seja com o NPM ou o YARN, caso o arquivo não exista, ele será criado.
- `npm install NomePacote` ou `yarn add NomePacote` ==> Instala um pacote no projeto através do NPM ou do YARN.
  - OBS: Instalando de **maneira global** no node, ou seja, todos os projetos no computador terão acesso
    - `npm install -g NomePacote`
- `npm update NomePacote` ou `yarn upgrade NomePacote` ==> Atualiza um pacote no projeto.
- `npm remove NomePacote` ou `yarn remove NomePacote` ==> Remove um pacote do projeto
- `npm start` ==> Inicializa o servidor local com o NPM ou YARN.
- `npm run dev` ==> Roda a aplicação em modo de desenvolvimento ('dev') executando o módulo que está no package.json na linha `"dev": `.

## Comandos do GULP:
- `gulp --version` ==> Exibe a versão instalada do gulp e do CLI (**C**ommand **L**ine **I**nterface).
- `gulp` ==> Executa o gulp via terminal a partir do arquivo fundamental chamando `gulpfile.js`.

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
    - `http-server -P 9090 .` ==> '.' diretório atual na porta '9090'
  - Desabilita o cache para atualizar a página ao salvar o arquivo: `http-server -c-1 .`
- **Body-Parser**: Serve para trabalhar com dados vindos do cliente, recebendo e trabalhando com JSON. Pega o padrão **URLENCODE** do body da requisição e trata como um JSON.
  - Instalação: `npm i --save body-parser`
- **Módulo FileSystem(fs)**: É padrão do node. Responsável tanto por ler quanto por escrever arquivos e verificar os conteúdos de uma pasta.

### Programas:
- **POSTMAN**: É um programa que possibilita fazer requisições **REST(GET, PUT,...)** de maneira mais fácil. Muito útil para testar requisições ao servidor tanto local quando já hospedado online.

<div style="color: #F88">
<h2>Erros Comuns</h2>
</div>

- `Module build failed: ModuleBuildError: Module build failed: Error: Node Sass version 7.0.1 is incompatible with ^4.0.0.`
  - A dependência **node-sass** foi descontinuada, contudo, a dependência atual é o **sass**
    - `npm uninstall node-sass` => Desinstalando o node-sass;
    - `npm install sass` => Instalando o sass;
  - Caso mesmo assim deseja-se instalar o node-sass:
    - `npm install node-sass@(your version)`
    - De preferência usar a versão "7.0.1" que é a última e pode ser ter uma compatibilidade melhor com o nodejs atual.
## Anotações:
- **ECMAScript**: É o nome formal da linguagem Javascript. Javascript é uma linguagem fracamente tipada(tipagem dinâmica).
- Tipagem forte: É quando atribuído um tipo para a variável não poderá ser mudado.
- Qual a diferença entre o **NPM** e o **YARN**?
  - Basicamente o YARN também é um gerenciador de pacotes e foi criado pelo facebook com o objetivo de ser mais rápido e seguro que o NPM, além disso ainda possibilitar instalar pacotes offline.
- Frameworks:
  - É um arcabouço o qual a aplicação é construída em cima, através dela é possível ter uma base para construir as aplicações. há tanto Frameworks para backend com o objetivo de persistir banco de dados, por exemplo, quanto para o FrontEnd na parte visual com o Angular.
- Padrão de projeto *Chain of Responsability ou Middleware*: 
  - É um padrão muito presente na web e no node. A ideia é diminuir o acoplamento de funções garantindo uma maior liberdade e utilizando a cadeia de funções com uso de **NEXT** para indicar o próximo passo.
- **AJAX**:
  - Ajax (acrônimo em língua inglesa de <em>**A**synchronous **J**avascript **a**nd **X**ML</em>, em português "Javascript Assíncrono e XML") é o uso metodológico de tecnologias como Javascript e XML, providas por navegadores, para tornar páginas Web mais interativas com o usuário, utilizando-se de solicitações assíncronas de informações.
  - A **XMLHttpRequest** (XHR) tem um papel importante na técnica de desenvolvimento web Ajax para se comunicar com os scripts do lado do servidor. Mais recentemente foi lançado o **Fetch API**, que possui funcionalidade semelhante ao XHR com linguagem em mais alto nível.
  - Com o AJAX da pra trabalhar com JSON também. Resumidamente, o AJAX é voltado para trabalhar com requisições assíncronas de maneira mais eficiente.
- **GULP**:
  - Gulp.js é uma ferramenta de automatização de tarefas em JavaScript. Tarefas como minificar, otimizar e compilar arquivos, tão repetitivas e necessárias ao desenvolvimento, podem ser automatizadas com o Gulp.
  - É usado principalmente no contexto Frontend. Trabalha com plugins ideal para cada cenário.
  - Ferramentas similares:
    - GRUNT;
    - WebPack
  - Utiliza os Streams do Node.js pra escrever os arquivos diretamente no disco.
  - Plugins:
    - **GULP-UGLIFY** ==> Serve para minificar arquivos usando o UGLIFY.js
    - **GULP-CONCAT** ==> Concatena arquivos em um único arquivo.
      - Exemplo: Junta todos os arquivos .js em um arquivo único.
    - **GULP-IMAGEMIN** ==> Otimiza imagens PNG, JPG, GIF e SVG.
  - No arquivo **GULPFILE.js** estarão as tarefas que o programador deseja que o GULP automatize.
  - *Além disso o GULP necessita que instale o* **CLI(LINHA DE COMANDO NO TERMINAL)** *dele*:
    - Comando: `npm install -g gulp-cli` ==> Instalado de maneira global
  - funções principais:
    - `gulp.task(name, fn)`: Irá registrar a função com um nome, podendo especificar uma dependencia caso uma tarefa seja necessario rodar antes dela.
    - `gulp.run(tasks...)`: Executa todas as tarefas com o máximo de simultaneidade.
    - `gulp.watch(glob, fn)`: Observa os arquivos indicados e quando uma alteração for feita, o gulp executará novamente a função.
    - `gulp.src(glob)`: Retorna um 'Readable Stream', ou seja, um Stream liberado para a leitura. Basicamente carrega os arquivos.
    - `gulp.dest(folder)`: Retorna um 'Writable Stream', ou seja, um Stream liberado para a escrita. Basicamente a pasta de destino onde serão salvos os arquivos.
- **Babel** em Javascript:
  - É uma plataforma ou framework que permite compilar e testar o javascript do 'futuro', ou seja, com as mais novas funcionalidades lançadas, em outras palavras, é muito útil para testar codigos de javascript e ter como resultado o mesmo código mas adaptado para executar na maioria dos browsers.
    - link: https://babeljs.io/
- **TypeScript**:
  - Tudo que é suportado no JavaScript é suportado no TypeScript. o TypeScript é um superconjunto de javascript pois no final o código será convertido pra javascript para poder ser executado com mais facilidade nos navegadores e outras plataformas.
  - O core do TypeScript seria possibilitar definir tipos no JavaScript, ou seja, uma linguagem tipada.
- **SASS**:
  - É um pré-processador CSS, com isso, permite adicionar novas funcionalidade aos CSS que nao está presente no padrão e através disso permite criar arquivos CSS com maior nível de reúso.
- **Webpack**:
  - Apresenta uma finalidade similar ao GULP no sentido de minificar arquivos e realizar tarefas, contudo, a diferença é que o GULP trabalha com TASKs, ou seja, tarefas a serem executadas e utiliza o padrão PIPE para executar as tarefas, já o **webpack é diferente pois trabalha com módulos**.
  - **<u>Importante</u>**: O Webpack apresenta <u>um **módulo de entrada**</u> nas configurações e só vai conseguir chegar em outros módulos somente se tiver `import` seja no módulo principal ou nos subsequentes.
    - O mesmo vale para imagens, arquivos de texto, fontes, CSS e afins... O loader irá reclamar se nao tiver importado em algum lugar.
  - Padrão de módulos:
    - CommonsJS: O node se baseia neste modulo, com module.exports e toda a configuração.
    - webpack: Padrão oficial da linguagem, implantado no ECMAScript 2015. Este sistema de modulos é baseado em `port` e `exports`.
  - O webpack apresenta um sistema de `loader`, o que significa que dependendo da extensão do arquivo ele vai aplicar um tipo de lógica para renderizar aquele arquivo.
- **JQuery**:
  - É uma biblioteca javascript muito popular, ajuda a buscar elementos na DOM. Trabalha com eventos e Ajax, utiliza os seletores do CSS, permite fazer o encadeamento de chamadas, fácil criação de plugins, suporte amplo nos browsers.
  - Pontos negativos:
    - A web está migrando para trabalhar componentes (Angular, React, vie,...), contudo, um caminho contrário ao JQuery.
- **Bootstrap**:
  - Bootstrap.css é um framework CSS que organiza e gerencia o layout de um site. É um framework que tem uma grande quantidade de estilos e funcionalidades voltadas para o CSS.