# GIT E GITHUB

Guia prático para iniciantes.

### Instalação

https://git-scm.com/download

# SCENES (Casos de uso)

- [x] Você deseja  criar pontos na história da produção do seu projeto
- [x] Você deseja verificar mudanças feitas no seu projeto

- [x] Você começa uma nova funcionalidade no seu projeto, sem estragar o que já foi feito.
- [x] Você adiciona as novas funcionalidades ao seu projeto em produção.
- [x] Você quer deletar a branch da nova funcionalidade, depois de aplicar em seu projeto.
  
- [x] Você quer colocar o seu projeto na nuvem

- [x] Você vai pegar um projeto já iniciado, para trabalhar com o time.
- [x] Você precisa resolver um conflito.
- [x] Antes de enviar a resolução, precisamos atualizar o projeto local.

- [x] Você precisa voltar um arquivo para um determinado momento na linha do tempo.
- [x] Você precisa recuperar algo deletado.

- `git init` // inicia a linha do tempo
- `git add` // adiciona ou atualiza mudanças para irem para a linha do tempo
- `git commit` // adiciona um ponto na linha do tempo
- `git log` // visualiza os pontos na linha do tempo / commit
- `git status` // informa o estado das alterações do nosso projeto
- `git show` // apresenta determinado ponto na história
- `git branch` // gerenciar novas linhas do tempo
- `git checkout` // manipula as linhas do tempo
- `git merge` // unir linhas do tempo
- `git push` // envia alterações locais para o repositório remoto
- `git clone` // clonar um projeto / repositório
- `git pull` // puxa do repositório remoto

# CONCEITOS

- Branch: São ramificações do seu projeto, ou seja, algo como outras linhas do tempo do seu projeto. Um exemplo prático é quando duas pessoas estão desenvolvendo novas funcionalidades independentes para o projeto, visando evitar problemas no repositório e quebra no projeto, é sugerido cada um criar uma branch, ou seja, uma linha do tempo própria para criar a funcionalidade e ao final, adicionar na branch principal do projeto e deste modo, o projeto se mantém íntegro e sem chances para quebras e bugs além.
- Conflitos: Ocorre quando em um mesmo arquivo há duas alterações na mesma linha ou conjuntos de linhas, neste caso, o usuário deverá definir qual será a alteração válida.

# COMANDOS

- `git init` => Inicializa um repositório git na pasta do projeto
- `git add landingpage.html` => Adiciona o arquivo para ser versionado no próximo commit
- `git add .` => Adiciona todos os arquivos da pasta que foram alterados ao próximo commit
- `git commit -m "Titulo do commit" -m "Descrição"` => Cria um ponto na história do projeto, ou seja, faz um commit com os arquivos que foram atualizados. A mensagem não é obrigatória, mas o título bem explicativo sim.
- `git commit -am "Titulo do commit"` => Já adiciona os arquivos e faz o commit
- `git log` => Mostra os pontos na história do projeto, ou seja, o histórico de commits.
- `git status` => Mostra o estado do ambiente de desenvolvimento git do projeto. Exibe os arquivos modificados e principalmente os que não estão sendo observados pelo git ou não estão no histórico.
- `git show codigoCommit` => Mostra os dados do commit, desde a sua geração, o que foi alterado e arquivos inseridos
- `git show` => Mostra o ultimo commit feito
- `git branch feature/cart` => Criando uma nova branch chamada 'feature/cart'
- `git checkout feature/cart` => Mudando para a nova branch
- `git checkout master` => Mudando para a branch principal, em alguns casos ela pode ser chamada de 'main'
- `git branch` => Mostra todas as branchs, ou seja, todas as linhas do tempo do projeto.
- `git merge feature/cart` => Faz a junção(Merge) da linha do tempo 'feature/cart' com a atual(master ou qualquer outra).
- `git branch -D feature/cart` => Removendo a branch feature/cart do projeto
- `git remote add origin linkDoGit` => Dado que o repositório do projeto foi criado offline, para adicionar na nuvem, basta criar o repositório no github ou qualquer outro serviço e adicionar uma origem remota com o link do git.
- `git push` => Adiciona os commits no repositorio remoto
- `git push -u origin master` => Adiciona os commits no repositorio remoto mas garantindo a criação do repositório master na nuvem
- `git config credential.helper store` => Todas as vezes que for feito Push não será mais necessario colocar o username e a senha
- `git config --global user.name "Your Name"` => Adiciona um nome de usuario global de modo a evitar de toda vez que fizer um push precisar informar
- `git config --global user.email "youremail@domain.com"` => Adiciona um nome de e-mail global de modo a evitar de toda vez que fizer um push precisar informar
- `git clone linkDoProjeto` => Faz o clone de um repositório remoto para o seu computador
- `git checkout -b novaBranch` => Mudando para a nova branch e já faz um checkout
- `git pull` => Puxa as novas alterações que estão no repositório remoto
- `git checkout b9264607b4c868b83 -- package.json` => Volta com o arquivo 'package.json' para a versão que estava no commit de código 'b9264607b4c868b83'
- `git checkout -- webpack-config.js` => Restaura o arquivo 'webpack-config.js' caso nao tenha feito um commit e enviado para o repositório.
- `git checkout b9264607b4c868b83 -- webpack-config.js` => Volta com o arquivo 'webpack-config.js' para a versão que estava no commit de código 'b9264607b4c868b83' que possivelmente foi apagado em um commit mais recente
- `git commit --amend`	=> Muda o commit anterior
- `git diff <branch origem> <branch destino>`	=> antes de fazer o merge das alterações, você pode também pré-visualizá-as usando este comando