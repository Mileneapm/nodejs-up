var request = require('request')
var clienteDataBase = require('../dataBase/cliente.dataBase')()

module.exports = () => {

  const controller = {}

  controller.listar = (req, res) => {

    clienteDataBase.listar((clientes) => {
      console.log(clientes)
      
      res.status(200).send('retorno')
    })
  }

  controller.salvar = (req, res) => {
    const cliente = req.body;    
    clienteDataBase.salvar(cliente);

   res.send('Usuário cadastrado com sucesso!')
  }

  controller.alterar = (req, res) => {
  }

  controller.excluir = (req, res) => {
    res.send('Usuário excluído com sucesso!')
  }

  return controller
}
