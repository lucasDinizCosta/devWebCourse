SELECT * FROM cidades;

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Neves', 2),
    ('Raquel Lyra', 3),
    ('Zenaldo Coutinho', null);

select * from prefeitos;

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rafael Greca', null);
    
select * from prefeitos;

-- Mais de um prefeito apontando pra mesma cidade
INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Pinheiro', 3);