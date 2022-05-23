Comandos do gitbash:

https://pt.wikiversity.org/wiki/Git_B%C3%A1sico

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
  
# Resumo:

- `git add` // adiciona ou atualiza mudanças para irem para a linha do tempo
- `git branch` // gerenciar novas linhas do tempo
- `git checkout` // manipula as linhas do tempo
- `git clone` // clonar um projeto / repositório
- `git commit` // adiciona um ponto na linha do tempo
- `git config --global color.ui true` // Ativar as cores nas respostas de comandos
- `git diff arquivo1 arquivo2` // Lista a diferença entre os arquivos
- `git diff` // Exibe o que foi alterado no repositório
- `git fetch` // Pega dados do projeto que está remoto
- `git help` // Lista os comandos do git
- `git init` // inicia a linha do tempo
- `git log` // visualiza os pontos na linha do tempo / commit
- `git merge` // unir linhas do tempo
- `git push` // É o comando em que você transfere commits a partir do seu repositório local para um repositório remoto
- `git pull` // puxa do repositório remoto
- `git show` // apresenta determinado ponto na história
- `git stash` // git stash arquiva (ou faz o stash) de alterações que você fez na cópia de trabalho durante um determinado período, para que você possa trabalhar em outra coisa, depois voltar e fazer a reaplicação mais tarde.
- `git status` // informa o estado das alterações do nosso projeto
- `git tag` // Adiciona marcações importantes no projeto, algo como commit, mas neste caso geralmente é utilizado para marcar lançamento de versões e builds. Este comando em específico irá listar as tags.

# CONCEITOS

- Branch: São ramificações do seu projeto, ou seja, algo como outras linhas do tempo do seu projeto. Um exemplo prático é quando duas pessoas estão desenvolvendo novas funcionalidades independentes para o projeto, visando evitar problemas no repositório e quebra no projeto, é sugerido cada um criar uma branch, ou seja, uma linha do tempo própria para criar a funcionalidade e ao final, adicionar na branch principal do projeto e deste modo, o projeto se mantém íntegro e sem chances para quebras e bugs além.
- Conflitos: Ocorre quando em um mesmo arquivo há duas alterações na mesma linha ou conjuntos de linhas, neste caso, o usuário deverá definir qual será a alteração válida.
  - `git mergetool`: Ferramenta gráfica que auxilia na resolução dos problemas de conflito ao utilizar o merge. **git mergetool** cria **\*.orig** arquivos de backup ao resolver fusões. Estes são seguros para remover uma vez que um arquivo foi fundida e sua git mergetool sessão foi concluída.
- HEAD: Ponteiro que aponta para as branchs criadas, inicialmente ele aponta para a branch 'main ou master' e em seguida, ao executar checkout, ele apontará para a branch solicitada.

## Importância do `git stash`:

- Muitas vezes, quando você está trabalhando em uma parte do seu projeto, **as coisas estão em um estado confuso** e você quer mudar de branch por um tempo para trabalhar em outra coisa. O problema é, você não quer fazer o commit de um trabalho incompleto somente para voltar a ele mais tarde. A resposta para esse problema é o comando git stash. Você quer mudar de branch, mas não quer fazer o commit do que você ainda está trabalhando; você irá fazer o stash das modificações. Para fazer um novo stash na sua pilha, execute: `git stash`
- Seu diretório de trabalho estará limpo. Neste momento, você pode facilmente mudar de branch e trabalhar em outra coisa; suas alterações estão armazenadas na sua pilha. Para ver as stashes que você guardou, você pode usar: `git stash list`
- Você pode aplicar aquele que acabou de fazer o stash com o comando mostrado na saída de ajuda do comando stash original: `git stash apply`. Se você quer aplicar um dos stashes mais antigos, você pode especificá-lo, assim: `git stash apply stash@{2}`. Se você não especificar um stash, **Git assume que é o stash mais recente e tenta aplicá-lo**.

# COMANDOS

- `git add landingpage.html` => Adiciona o arquivo para ser versionado no próximo commit
- `git add .` => Adiciona todos os arquivos da pasta que foram alterados ao próximo commit
- `git branch feature/cart` => Criando uma nova branch chamada 'feature/cart'
- `git branch` => Mostra todas as branchs, ou seja, todas as linhas do tempo do projeto.
- `git branch -D feature/cart` => Removendo a branch feature/cart do projeto
- `git checkout -b novaBranch` => A branch "novaBranch" não existe, então o "-b" cria essa branch caso ela não exista, e em seguida o git muda pra ela
- `git checkout b9264607b4c868b83 -- package.json` => Volta com o arquivo 'package.json' para a versão que estava no commit de código 'b9264607b4c868b83'
- `git checkout -- webpack-config.js` => Restaura o arquivo 'webpack-config.js' caso nao tenha feito um commit e enviado para o repositório.
- `git checkout b9264607b4c868b83 -- webpack-config.js` => Volta com o arquivo 'webpack-config.js' para a versão que estava no commit de código 'b9264607b4c868b83' que possivelmente foi apagado em um commit mais recente
- `git checkout feature/cart` => Mudando para a nova branch
- `git checkout master` => Mudando para a branch principal, em alguns casos ela pode ser chamada de 'main'
- `git clone linkDoProjeto` => Faz o clone de um repositório remoto para o seu computador
- `git commit --amend`	=> Refaz o commit anterior
  - O amend é destrutivo e **só deve ser utilizado antes do commit ter sido enviado ao servidor remoto**.
- `git commit -m "Titulo do commit" -m "Descrição"` => Cria um ponto na história do projeto, ou seja, faz um commit com os arquivos que foram atualizados. A mensagem não é obrigatória, mas o título bem explicativo sim.
- `git commit -am "Titulo do commit"` => Para commitar também os arquivos versionados mesmo não estando no Stage
- `git config credential.helper store` => Todas as vezes que for feito Push não será mais necessário colocar o username e a senha
- `git config --list`  => lista todas as configurações do git no seu computador
- `git config --global user.name "Your Name"` => Adiciona um nome de usuário global de modo a evitar de toda vez que fizer um push precisar informar
- `git config --global user.email "youremail@domain.com"` => Adiciona um nome de e-mail global de modo a evitar de toda vez que fizer um push precisar informar
- `git diff <branch origem> <branch destino>`	=> antes de fazer o merge das alterações, você pode também pré-visualizá-as usando este comando
- `git fetch origin` => Para pegar dados dos seus projetos remotos.
  - Esse comando vai até o projeto remoto e pega todos os dados que você ainda não tem. Depois de fazer isso, você deve ter referências para todos os branches desse remoto, onde você pode fazer o merge ou inspecionar a qualquer momento.
- `git help` => Lista os comandos do git
	- `git help {comando}`
	- `git {comando} --help`
	- `man git- {comando}`
	- Caso precise de ajuda em um comando especifico use os 3 comandos anteriores
- `git init` => Inicializa um repositório git na pasta do projeto
- `git log` => Mostra os pontos na história do projeto, ou seja, o histórico de commits.
- `git merge`: Exemplos do comando de merge entre branchs
  - `git merge feature/cart` => Faz a junção(Merge) da linha do tempo 'feature/cart' com a atual(master ou qualquer outra).
  - Suponha que você decidiu que o trabalho na tarefa #53 está completo e pronto para ser feito o **merge** no branch **master**. Para fazer isso, você fará o merge do seu branch **iss53**, bem como o merge do branch **hotfix** de antes. Tudo que você tem a fazer é executar o **checkout** do branch para onde deseja fazer o merge e então rodar o comando **git merge**:
    - `git checkout master` => Muda o ponteiro HEAD para branch master, ou seja, vai para a branch master do git.
    - `git merge iss53` => Faz merge na branch master com os elementos presentes na branch **iss53**
  - `git mergetool`: Ferramenta gráfica que auxilia na resolução dos problemas de conflito ao utilizar o merge. **git mergetool** cria **\*.orig** arquivos de backup ao resolver fusões. Estes são seguros para remover uma vez que um arquivo foi fundida e sua git mergetool sessão foi concluída.
- `git mv arquivo_origem arquivo_destino` => o Git não monitora explicitamente arquivos movidos.
É um pouco confuso que o Git tenha um comando mv. Se você quiser renomear um arquivo no Git.
- `git pull` => Puxa as novas alterações que estão no repositório remoto
- `git push` => Adiciona os commits no repositorio remoto
  - `git push -u origin master` => Adiciona os commits no repositorio remoto mas garantindo a criação do repositório master na nuvem
  - `git push [nome_do_repositório_remoto] [nome_da_sua_branch_local]` =>  utilizando o git push as exportações comprometem as filiais remotas. Para fazer isso, você executa `git push [nome_do_repositório_remoto] [nome_da_sua_branch_local]`, que vai tentar fazer que o **[nome_do_repositório_remoto]** receba a sua branch **[nome_da_sua_branch_local]** contendo todos seus commits com alterações. Por exemplo: `git push origin develop` 
- `git reflog` => Para visualizar a lista de hash dos commits
- `git rm -f {arquivo}` => Remove o "arquivo" do monitoramento de versionamento no git, deste modo ele para de ser versionado no projeto. O comando git rm faz isso e também remove o arquivo do seu diretório para você não ver ele como arquivo não monitorado (untracked file) na próxima vez.
- `git remote add origin linkDoGit` => Dado que o repositório do projeto foi criado offline, para adicionar na nuvem, basta criar o repositório no github ou qualquer outro serviço e adicionar uma origem remota com o link do git.
- `git reset --hard HEAD~1` => Para voltar ao último commit por completo sobreescrevendo os arquivos no ultimo stage
- `git reset --soft HEAD~1` => Para voltar ao último commit e **mantém** os últimos arquivos no Stage
- `git reset --hard XXXXXXXXXXX` => Volta para o commit com a hash XXXXXXXXXXX
- `git show codigoCommit` => Mostra os dados do commit, desde a sua geração, o que foi alterado e arquivos inseridos
- `git show` => Mostra o ultimo commit feito
- `git status` => Mostra o estado do ambiente de desenvolvimento git do projeto. Exibe os arquivos modificados e principalmente os que não estão sendo observados pelo git ou não estão no histórico.
- `git tag` => Este comando lista as tags disponíveis. Git tem a habilidade de criar tags em pontos específicos na história do código como pontos importantes. Geralmente as pessoas usam esta funcionalidade para marcar pontos de release (v1.0, e por aí vai). Nesta seção, você aprenderá como listar as tags disponíveis, como criar novas tags, e quais são os tipos diferentes de tags.
  - `git tag -a v1.4 -m 'my version 1.4'`: Para criar uma tag basta executar o comando, caso não queira criar a tag anotada, somente retire os parâmetros **-a** e **-m**.

# ERROS

- ERRO 1:
  - Solução: Execute `git config --global --add safe.directory '*'` no gitbash ou `git config --global --add safe.directory *` no powershell
```bash
fatal: unsafe repository ('E:/git/devWebCourse' is owned by someone else)
To add an exception for this directory, call:

        git config --global --add safe.directory E:/git/devWebCourse
```

  