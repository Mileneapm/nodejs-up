const routing = require('express').Router();

var cardapioController = require('../controller/cardapio')()
var clienteController = require('../controller/cliente')()
var pedidoController = require('../controller/pedido')()


routing.get('/cardapio', cardapioController.listar)
routing.post('/cardapio', cardapioController.salvar)
routing.put('/cardapio', cardapioController.alterar)
routing.delete('/cardapio/:id', cardapioController.excluir)


routing.get('/cliente', clienteController.listar)
routing.post('/cliente', clienteController.salvar)
routing.put('/cliente', clienteController.alterar)
routing.delete('/cliente/:id', clienteController.excluir)

routing.get('/pedido/:id', pedidoController.listar)
routing.post('/pedido', pedidoController.salvar)

module.exports = routing