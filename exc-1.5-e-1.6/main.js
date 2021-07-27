const express = require('express')
const app = express()
const port = 4000

app.use(express.json());

const usuarios = Array();

app.get('/', (req, res) => {
  res.status(200).json(usuarios)
})

app.post('/', (req, res) => {
  const user = req.body;

  console.log("Login: " + user.login)
  console.log("Senha: " + user.senha)

  usuarios.push(user)

  console.log(usuarios)

  res.send('Usuário adicionado com sucesso')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})