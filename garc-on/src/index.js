const express = require('express');
const routing = require('./routes/routing');

const app = express()
const port = 9000

app.use(express.json());  

const routing = require('./routes/routing')

app.use(routing)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})