/* Obter todos os registros */
SELECT * FROM pizzaria.empresa;

/* Obter alguns registros */
SELECT 
nome, email, senha
FROM empresa;

/* Inserir valores */
INSERT INTO empresa
(nome, email, senha, cep, endereco, numero, bairro, cidade, estado, sobre)
VALUES
('Burgueria', 'burgueria.contato@gmail.com', '123456', '12345-542', 'Rua Olá Mundo', '123', 'Bairro Teste', 'São Paulo', 'SP', 'Sobre empresa');

/* Atualizar valores */
UPDATE empresa SET nome = 'Burger Loko', email = 'burgerloko.contato@gmail.com' WHERE idempresa = 3;

/* Deletar registros */
DELETE FROM empresa WHERE idempresa = 3;