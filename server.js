var express = require('express')
var mongoose = require('mongoose');

var app = express()

var SchemaOb = new mongoose.Schema({
    userName: String,
    firstName : String,
    lastName : String
});


var SchemaObModel = mongoose.model('bilalSchema', SchemaOb);





app.get('/', function (req, res) {
  res.send('Hello Karachi 15-2-17')
})

app.get('/home', function (req, res) {
  res.send('home')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


mongoose.connect('mongodb://localhost/test');