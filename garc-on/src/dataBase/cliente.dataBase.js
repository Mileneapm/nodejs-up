var mysql = require('mysql');

module.exports = () => {

    const repository = {}

    function conectar () {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'garcON'
        });

        connection.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }

            console.log('connected as id ' + connection.threadId);
        });

        return connection;
    }

    repository.listar = () => {
        const connection = conectar()
        connection.query('SELECT * FROM USUARIO', function (err, rows) {
            if (err) {
                console.log(err)
                return;
            }

           /* usuarios = rows.map(function(item) {
                if (user.id === item.id) {
                    item.login = user.login;
                }
                return item;        
            }) */

            console.log(rows)

            return rows
        })
    }
    
    repository.salvar = (usuario) => {
        const connection = conectar()
        connection.query('INSERT INTO USUARIO SET ?', usuario, function (err, res) {
            if (err) {
                console.log(err)
                return;
            }
    
            console.log(`inseriu... ${res.insertId}`)
        })
    }

    return repository

}

/**
 * CREATE TABLE CLIENTE (
        ID INTEGER PRIMARY KEY AUTO_INCREMENT,
        NOME VARCHAR(255),
        CPF VARCHAR (11),
        CEP VARCHAR(8)
        );

 */
    