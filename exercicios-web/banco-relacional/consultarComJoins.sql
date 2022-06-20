select * from prefeitos;
select * from cidades;

SELECT * from cidades c inner join prefeitos p on c.id = p.cidade_id;
SELECT * from cidades c left join prefeitos p on c.id = p.cidade_id;
SELECT * from cidades c right join prefeitos p on c.id = p.cidade_id;

-- FULL JOIN nao existe no mysql mas da pra ser simulado com left e right join
-- SELECT * from cidades c full join prefeitos p on c.id = p.cidade_id;
SELECT * from cidades c left join prefeitos p on c.id = p.cidade_id
UNION
SELECT * from cidades c right join prefeitos p on c.id = p.cidade_id;