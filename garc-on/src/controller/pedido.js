var motoristas = Array();

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

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})