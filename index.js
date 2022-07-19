const express = require('express');

const app = express();

app.listen('3000')

//GET
// app.route('/').get( (req, res) => res.send("Hello World!") )
// app.route('/sobre').get( (req, res) => res.send("Sobre") );

//POST
//middleware
//app.use(express.json())

// app.route('/').post( (req, res) => res.send(req.body) )

//PUT
//middleware
//app.use(express.json())

// let author = "Ryan"

// app.route('/').get( (req, res) => res.send(author))

// app.route('/').put( (req, res) => {
//   author = req.body.author
//   res.send(author)
// })


//DELETE
// app.route('/:indentificador').delete( (req, res) => {
//   res.send(req.params.indentificador)
// })