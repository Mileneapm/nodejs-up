var request = require('request')
var cardapioDataBase = require('../dataBase/cardapio.dataBase')()

module.exports = () => {

  const controller = {}

  controller.listar = (req, res) => {

    cardapioDataBase.listar((cardapios) => {
      console.log(cardapios)
      
      res.status(200).send('retorno')
    })
  }

  controller.salvar = (req, res) => {
    const cardapio = req.body;    
    cardapioDataBase.salvar(cardapio);

   res.send('Usuário cadastrado com sucesso!')
  }

  controller.alterar = (req, res) => {
  }

  controller.excluir = (req, res) => {
    res.send('Usuário excluído com sucesso!')
  }

  return controller
}
