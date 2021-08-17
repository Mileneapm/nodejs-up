var cardapioDataBase = require('../dataBase/cardapio.dataBase')()

module.exports = () => {

  const controller = {}

    controller.listar = (req, res, callback) => {

      cardapioDataBase.listar((cardapio, err) => {
        if (err) {
          return callback(err)
      }        
      res.status(200).json(cardapio)
      })
    }

    controller.salvar = (req, res, callback) => {
      const cardapioDados = req.body;   
      
      if (!cardapioDados.valor) {            
        throw {httpStatusCode: 400, code: 'ERR001', message: 'valor é obrigatório'};
      }
      
      cardapioDataBase.salvar(cardapioDados, (cardapio, err) => {      
          if (err) {
              return callback(err)
           }         
        res.json(cardapio)
      });
    }

    controller.excluir = (req, res) => {
      const id = req.params.id
      cardapioDataBase.excluir(id)

      res.send('Produto cardapio excluído com sucesso!')
    }

    controller.alterar = (req, res) => {}

  return controller
}
