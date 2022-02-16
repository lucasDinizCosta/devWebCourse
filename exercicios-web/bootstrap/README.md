# Projeto galeria -- Nos exercicios de Bootstrap
Fala pessoal! Tranquilo?

Ocorreram algumas atualizações nas dependências e alguns colegas relataram problemas após instalá-las ao final da aula Opções de Instalação. Então, para solucionar esse problema, você deve fazer algumas atualizações seguindo o passo-a-passo:

1. Abra o seu projeto

2. Apague a pasta node_modules e o arquivo `package-lock.json` para garantir que não ficará nenhuma referência antiga

3. No arquivo package.json substitua as linhas referentes às dependências do `node-sass`, `sass-loader`, `webpack` por:
   
```JSON
"node-sass": "4.14.1",
"sass-loader": "^7.3.1",
"webpack": "4.4.0",
```

1. E por fim, no terminal, dentro da pasta do projeto, rode o comando:
`npm i`

Feito isso, os erros irão desaparecer e você pode dar continuidade ao projeto normalmente.

Bons estudos!

<hr>

- `Module build failed: ModuleBuildError: Module build failed: Error: Node Sass version 7.0.1 is incompatible with ^4.0.0.`
  - A dependência **node-sass** foi descontinuada, contudo, a dependência atual é o **sass**
    - `npm uninstall node-sass` => Desinstalando o node-sass;
    - `npm install sass` => Instalando o sass;
  - Caso mesmo assim deseja-se instalar o node-sass:
    - `npm install node-sass@(your version)`
    - De preferência usar a versão "7.0.1" que é a última e pode ser ter uma compatibilidade melhor com o nodejs atual.