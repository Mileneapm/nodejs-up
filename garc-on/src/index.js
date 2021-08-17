const express = require('express')
const yaml = require('js-yaml')
const fs = require('fs')

  try {
    let fileContents = fs.readFileSync('./config/host.yaml', 'utf8');
    data = yaml.load(fileContents);
      } catch (e) {
        console.log(e);
  }

  const app = express()
  const port = data['port']

  app.use(express.json())

  const routing = require('./routes/routing')

  app.use(routing) 

  app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })