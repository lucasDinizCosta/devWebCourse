-- O plugin vscode-database tem um problema de se as colunas tiverem o mesmo nome, ele não exibe
-- contudo, o mysql exibe normalmente
select 
    e.nome as Estado, 
    c.nome as Cidade, 
    regiao as Região 
from estados e, cidades c
where e.id = c.estado_id;

select 
    e.nome as Estado, 
    c.nome as Cidade, 
    regiao as Região 
from estados e
inner join cidades c on e.id = c.estado_id;