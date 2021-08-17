var mysql = require('mysql');

module.exports = () => {

    const repository = {}

    function conectar (callback) {
        var connection = mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: '',
            database: 'garcon'
        });

        connection.connect(function (err) {
            if (err) {
                return callback(connection, err)
            }
            return callback(connection, err);
        });
    }

     repository.listar = (id, callback) => {
        conectar((connection, err) => {
        connection.query('SELECT SUM(VALOR) as TOTAL_ from pedido p inner join cardapio c where p.CLIENTE_ID = ? and p.CARDAPIO_ID = c.CARDAPIO_ID ',[id], function (erro, rows) { 
            if (erro) {
                console.log(erro)
                return
            }
            return callback(rows)
            })
        })
    }
    
    //select * from pedido p inner join cardapio c where p.CLIENTE_ID = ? and p.CARDAPIO_ID = c.CARDAPIO_ID 

    repository.salvar = (pedido, callback) => {
        conectar((connection, err) => {
            if (err) {
                const error = new Error()
                error.message = "Não foi possível conectar ao banco de dados"
                error.httpStatusCode = 500
                error.code = 'ERR005'
                    return callback(null, error)
            }
        
        connection.query('INSERT INTO PEDIDO SET ?', pedido, function (err, res) {
            if (err) {
                const error = new Error()
                    error.message = "Erro ao inserir o pedido"
                    error.httpStatusCode = 500
                    error.code = 'ERR003'
                    return callback(null, error)
                }
                
                pedido.id = res.insertId
                connection.end();
                return callback(pedido, null)
            })
        })
    }
    return repository
}