# Arquivo JSON

* http://localhost:9000/cardapio
{
    "nome": "hamburguer",
    "descricao": "costela com barbecue",
    "valor": "25,00"
}

* http://localhost:9000/cliente
{
    "nome": "milene",
    "cpf": "446.794.060-03",
    "cep": "80730095"
}

# Tabelas MYSQL garcon

   CREATE TABLE CARDAPIO (
        CARDAPIO_ID INTEGER PRIMARY KEY AUTO_INCREMENT,
        NOME VARCHAR(255),
        DESCRICAO VARCHAR (255),
        VALOR DECIMAL(5,2)
        );

   CREATE TABLE CLIENTE (
        CLIENTE_ID INTEGER PRIMARY KEY AUTO_INCREMENT,
        NOME VARCHAR(255),
        CPF VARCHAR (11),
        CEP VARCHAR(8)
        );

    CREATE TABLE PEDIDO (
        PEDIDO_ID INTEGER PRIMARY KEY AUTO_INCREMENT,
        CLIENTE_ID INT,
        CLIENTE_ID INT,
        VALOR_TOTAL DECIMAL(6,2)
        );

