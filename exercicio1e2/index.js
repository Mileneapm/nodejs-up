const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

var motoristas = Array();
var veiculos = Array ();

app.get('/motorista/lista', (req, res) => {
    res.status(200).json(motoristas);
})

app.get('/motorista/mediaidade', (req, res) => {
  const mediaIdade = motoristas.reduce( function (valorIdade, item) {
    return parseInt(valorIdade) + parseISnt(item.idade);
  }, 0)
  numCadastros = motoristas.length;
  media = mediaIdade / numCadastros;
  res.status(200).json("Media da idade dos motoristas = " + media);
})

app.get('/motorista', (req, res) => {
  var nome = req.query.nome;

  const motoristaFiltro = motoristas.filter( function (item, index) {
    return item.nome === nome;
  })
    res.status(200).json(motoristaFiltro);
    //http://localhost:3000/motorista?nome=""
})
  
app.post('/motorista', (req, res) => {
    const motorista = req.body;
    motoristas.push(motorista);

    console.log("\nMotorista:\n", motoristas);
    res.send('Motorista adicionado com sucesso');
  })

app.put('/motorista', (req, res) => {
    const motorista = req.body;

    motoristas = motoristas.map( function (item) {
      if (motorista.id === item.id) {
        return motorista;
      }
      return item;
    })

    console.log(motoristas);

    res.send('Cadastro motorista alterado com sucesso!');
})

app.delete('/motorista/:id', (req, res) => {
  const { id } = req.params;
  const motorista = motoristas.findIndex(p => p.id == id);
  
  motoristas.splice(motorista, 1); 
  return res.send('Cadastro motorista deletado com sucesso!');
 });

 /**
  * veiculos
  */

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

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})