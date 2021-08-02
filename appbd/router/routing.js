const routing = require('express').Router();

var motoristaController = require('../controller/motorista')
var veiculoController = require('../controller/veiculo')

  app.use(motoristaController)
  app.use(veiculoController)