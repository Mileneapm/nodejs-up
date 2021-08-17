# GarçON

> Aplicação backend com NodeJS, para requisição de comida, sendo cadastrado cliente,
cardapio com os lanches e pedido.

# Tabelas MYSQL garcon
```SQL
   CREATE TABLE CARDAPIO (
        CARDAPIO_ID INTEGER PRIMARY KEY AUTO_INCREMENT,
        NOME VARCHAR(255),
        DESCRICAO VARCHAR (255),
        VALOR DECIMAL(5,2)
        );

   CREATE TABLE CLIENTE (
        CLIENTE_ID INTEGER PRIMARY KEY AUTO_INCREMENT,
        NOME VARCHAR(255),
        CEP VARCHAR(8)
        );

    CREATE TABLE PEDIDO (
        PEDIDO_ID INTEGER PRIMARY KEY AUTO_INCREMENT,
        CLIENTE_ID INT,
        CARDAPIO_ID INT
        );


```JSON
http://localhost:9000/cardapio
{
    "nome": "hamburguer",
    "descricao": "costela com barbecue",
    "valor": "25,00"
}

http://localhost:9000/cliente
{
    "nome": "milene",
    "cpf": "446.794.060-03",
    "cep": "80730095"
}

http://localhost:9000/pedido
{
    "cliente_id": "1",
    "cardapio_id":"1"
}