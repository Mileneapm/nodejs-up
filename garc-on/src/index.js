const express = require('express');

const app = express()
const port = 9000

app.use(express.json());  

const routing = require('./routes/routing');
app.use(routing)


 app.get('/test', function(req, res){
  throw {status: 500, message: 'detailed message'};
})

app.use(function (err, req, res, next) {
  res.status(err.httpStatusCode || 500).json({code: err.code, message: err.message})
});
 

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})