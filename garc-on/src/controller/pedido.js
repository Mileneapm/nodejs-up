var pedidoDataBase = require('../dataBase/pedido.dataBase')()

module.exports = () => {

  const controller = {}

    controller.listar = (req, res, callback) => {

      const id = req.params.id

      pedidoDataBase.listar(id, (callback) => {
  
      res.status(200).json(callback)
      })
    }

    controller.salvar = (req, res, callback) => {
      const pedidoDados = req.body;
      pedidoDataBase.salvar(pedidoDados, (pedido, err) => {      
          if (err) {
              return callback(err)
           }         
        res.json(pedido)
      });
    }

    return controller
}
