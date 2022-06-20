select
    regiao as 'Região',
    sum(populacao) as 'Total'
from estados
group by regiao
order by Total desc;

select
    sum(populacao) as 'Total', 
    avg(populacao) as 'Média',
    (SELECT COUNT(qtdRegioes.regiao) FROM
    (SELECT 
            regiao
          FROM estados 
          group by regiao) as qtdRegioes) as 'Quantidade regioes',
    count(nome) as 'Estados na base'
from estados
