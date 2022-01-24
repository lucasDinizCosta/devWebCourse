# Correção para problemas com npm install
#### Fala pessoal! Beleza?
#### Devido às novas versões do SASS, ao tentar instalá-lo com os arquivos disponibilizados no curso, um pequeno erro pode vir a acontecer. Para resolver é bem simples, basta seguir esses passos:
1 - Delete a pasta node_modules do seu projeto

2 - Abra o arquivo package.json

3 - Dentro do arquivo, procure nas dependências a linha referente ao node-sass e/ou sass e delete a linha

4 - Salve o arquivo

5 - Use o comando `npm install` no seu projeto normalmente

6 - Agora utilize o comando `npm install node-sass gulp-sass --save-dev`

Com isso o problema deve ser corrigido.
Bons estudos!