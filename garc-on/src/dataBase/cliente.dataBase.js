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
        connection.query('SELECT * FROM CLIENTE', function (err, rows) {
            if (err) {
                console.log(err)
                return;
            }
                return callback(rows)
            })
        })
    }
    
    repository.salvar = (cliente, callback) => {
        conectar((connection, err) => {
            if (err) {
                const error = new Error()
                error.message = "Não foi possível conectar ao banco de dados"
                error.httpStatusCode = 500
                error.code = 'ERR005'
                    return callback(null, error)
            }
        
        connection.query('INSERT INTO CLIENTE SET ?', cliente, function (err, res) {
            if (err) {
                const error = new Error()
                    error.message = "Erro ao inserir o cliente"
                    error.httpStatusCode = 500
                    error.code = 'ERR003'
                    return callback(null, error)
                }
                
                cliente.id = res.insertId
                connection.end();
                return callback(cliente, null)
            })
        })
    }

    repository.excluir = (id) => {
        conectar((connection, err) => {
            if (err) {
                console.log(err)
                return
            }
        connection.query('DELETE FROM CLIENTE WHERE ID = ?', [id], function (err, rows) {
            if (err) {
                console.log(err)
                return
            }
                return
            })
        })
    }

    return repository
}