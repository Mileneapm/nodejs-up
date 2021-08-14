var request = require('request')
var pedidoDataBase = require('../dataBase/pedido.dataBase')()

module.exports = () => {

  const controller = {}

  controller.listar = (req, res) => {

    pedidoDataBase.listar((pedidos) => {
      console.log(pedidos)
      
      res.status(200).send('retorno')
    })
  }

  controller.salvar = (req, res) => {
    const pedido = req.body;    
    pedidoDataBase.salvar(pedido);

   res.send('Usuário cadastrado com sucesso!')
  }

  controller.alterar = (req, res) => {
  }

  controller.excluir = (req, res) => {
    res.send('Usuário excluído com sucesso!')
  }

  return controller
}
