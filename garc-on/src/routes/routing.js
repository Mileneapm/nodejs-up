const routing = require('express').Router();

var cardapioController = require('../controller/cardapio')()
var clienteController = require('../controller/cliente')()
var pedidoController = require('../controller/pedido')()

routing.get('/cardapio', cardapioController.listar)
routing.post('/cardapio', cardapioController.salvar)
routing.put('/cardapio', cardapioController.alterar)
routing.post('/cardapio', cardapioController.excluir)

routing.get('/cliente', clienteController.listar)
routing.post('/cliente', clienteController.salvar)
routing.put('/cliente', clienteController.alterar)
routing.post('/cliente', clienteController.excluir)

routing.get('/pedido', pedidoController.listar)
routing.post('/pedido', pedidoController.salvar)
routing.put('/pedido', pedidoController.alterar)
routing.post('/pedido', pedidoController.excluir)

module.exports = routing