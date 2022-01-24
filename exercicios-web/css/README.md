# Atualização - Propriedades CSS Grid obsoletas
## Fala pessoal! Na aula a seguir, algumas propriedades CSS serão utilizadas, incluindo essas três: `gridcolumn-gap`, `grid-row-gap` ou `grid-gap`.

## Recentemente, no entanto, o uso delas se tornou obsoleto, o que pode gerar o aviso Property is obsolete. Avoid using it (propriedade obsoleta. Evite usá-la).

## Para solucionar isso, basta, em vez de utilizar grid-column-gap, usar column-gap. E, em vez de grid-row-gap, usar row-gap. E, em vez de grid-gap, usar gap. Em outras palavras, basta remover o prefixo grid- que funcionarão como esperado.