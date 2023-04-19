DROP DATABASE IF EXISTS vendas;
CREATE DATABASE vendas CHARSET=UTF8 COLLATE utf8_general_ci;
USE vendas;

CREATE TABLE vendedores(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome varchar (200) NOT NULL,
    matricula INT (5) NOT NUll
);
CREATE TABLE produtos(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome varchar (200) not null,
    valor float (6,2) NOT NULL
);
CREATE TABLE vendas(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    data date not null,
    quantidade int NOT NULL,
    protudoid int NOT NULL,
    vendedorid int NOT NULL,
    FOREIGN KEY (protudoid) REFERENCES produtos(id) ON DELETE CASCADE,
    FOREIGN KEY (vendedorid) REFERENCES vendedores(id) ON DELETE CASCADE
);

INSERT INTO vendedores VALUES 
("", "Stefany Antonella", "14644"),
("", "Stella Viana", "01516"),
("", "Tomás Isaac", "50913"),
("", "Osvaldo Galvão", "72193");

INSERT INTO produtos VALUES
("", "Samsung Galaxy M53", 2211.11),
("", "Motorola Moto G42", 1499.00),
("", "Rainha das Chamas", 36.90),
("", "Cronicas Saxoniscas - O cavaleiro da morte", 57.90),
("", "O milagre da manhã", 56.90),
("", "Lavadoura de Roupas Brastemp BWK12AB", 2199.00),
("", "Fogao Atlas 4 Bocas", 899.00);

INSERT INTO vendas VALUES
("", CURDATE(), 2,1,3),
("", CURDATE(), 1,2,3),
("", CURDATE(), 3,1,2),
("", CURDATE(), 1,3,2),
("", CURDATE(), 2,2,1),
("", CURDATE(), 1,3,1);