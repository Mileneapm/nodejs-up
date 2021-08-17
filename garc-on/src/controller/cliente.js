var clienteDataBase = require('../dataBase/cliente.dataBase')()

module.exports = () => {

  const controller = {}

    controller.listar = (req, res, callback) => {

      clienteDataBase.listar((cliente, err) => {
        if (err) {
          return callback(err)
      }        
      res.status(200).json(cliente)
      })
    }

    controller.salvar = (req, res, callback) => {
      const clienteDados = req.body;   
      
      if (!clienteDados.cep) {            
        throw {httpStatusCode: 400, code: 'ERR001', message: 'cep é obrigatório'};
      }
        //var cep = clienteDados.cep
        //capturar o cep e fazer um request na api
        //de de endereços
        //https://viacep.com.br/ws/81050100/json/

        //request(`https://viacep.com.br/ws/${cep}/json/`, (error, response, body) => {
        //    clienteDados.endereco = JSON.parse(body)
        //
        //    usuarios.push(clienteDados)           
        //
        //    res.send('Usuário adicionado com sucesso!')
        //});
      
      clienteDataBase.salvar(clienteDados, (cliente, err) => {      
          if (err) {
              return callback(err)
           }         
        res.json(cliente)
      });
    }

    controller.excluir = (req, res) => {
      const id = req.params.id

      clienteDataBase.excluir(id)

      res.send('Cliente excluído com sucesso!')
    }

    controller.alterar = (req, res) => {}

  return controller
}
