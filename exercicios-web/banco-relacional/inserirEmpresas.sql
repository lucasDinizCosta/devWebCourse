ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 95694186000132),
    ('Vale', 27887148000146),
    ('Banco do Brasil', 37129830046152),
    ('Itau', 14583297111264),
    ('Santander', 23357986123175),
    ('Caixa', 37421005915546),
    ('Cielo', 01598317000134);

-- Descreve a tabela
desc empresas;
desc prefeitos;

select * from empresas;
select * from cidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);
