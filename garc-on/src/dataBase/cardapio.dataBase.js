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

    repository.listar = (callback) => {
        conectar((connection, err) => {
            if (err) {
                const error = new Error()
                error.message = "Não foi possível conectar ao banco de dados"
                error.httpStatusCode = 500
                error.code = 'ERR003'
                return callback(null, error)
            }
        connection.query('SELECT * FROM CARDAPIO', function (err, rows) {
            if (err) {
                console.log(err)
                return;
            }
                return callback(rows)
            })
        })
    }
    
    repository.salvar = (cardapio, callback) => {
        conectar((connection, err) => {
            if (err) {
                const error = new Error()
                error.message = "Não foi possível conectar ao banco de dados"
                error.httpStatusCode = 500
                error.code = 'ERR005'
                    return callback(null, error)
            }
        
        connection.query('INSERT INTO CARDAPIO SET ?', cardapio, function (err, res) {
            if (err) {
                const error = new Error()
                    error.message = "Erro ao inserir o produto no cardapio"
                    error.httpStatusCode = 500
                    error.code = 'ERR003'
                    return callback(null, error)
                }
                
                cardapio.id = res.insertId
                connection.end();
                return callback(cardapio, null)
            })
        })
    }

    repository.excluir = (id) => {
        conectar((connection, err) => {
            if (err) {
                return
            }
        connection.query('DELETE FROM CARDAPIO WHERE CARDAPIO_ID = ?', [id], function (err, rows) {
            if (err) {
                return
            }
                return
            })
        })
    }

    return repository
}    