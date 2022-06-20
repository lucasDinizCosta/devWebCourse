SELECT * FROM estados;

SELECT 
    Sigla, 
    nome as 'Nome do Estado' 
FROM estados -- Pode colocar sem o 'as' que também funciona
WHERE regiao = 'Sul';

SELECT 
    nome, 
    regiao, 
    populacao 
from estados
where populacao >= 10
order by populacao DESC