const express = require('express')
const app = express()

var veiculos = Array ();

app.get('/veiculo/lista', (req, res) => {
    res.status(200).json(veiculos);
})

app.get('/veiculo', (req, res) => {
  var modelo = req.query.modelo;

  const veiculoFiltro = veiculos.filter( function (item, index) {
    return item.modelo === modelo;
  })
    res.status(200).json(veiculoFiltro)
})
  
app.post('/veiculo', (req, res) => {
    const veiculo = req.body;
    veiculos.push(veiculo);

    console.log("\Veiculos:\n", veiculos);
    res.send('Veiculo adicionado com sucesso');
  })

app.put('/veiculo', (req, res) => {
    const veiculo = req.body;

    veiculos = veiculos.map( function (item) {
      if (veiculo.id === item.id) {
        return veiculo;
      }
      return item;
    })
    res.send('Cadastro veiculo alterado com sucesso!');
})

app.delete('/veiculo/:id', (req, res) => {
  const { id } = req.params;
  const veiculo = veiculos.findIndex(p => p.id == id);
  
  veiculos.splice(veiculo, 1); 
  return res.send('Cadastro veiculo deletado com sucesso!');
 });

 module.exports = app