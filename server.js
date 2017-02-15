var express = require('express')
var mongoose = require('mongoose');

var app = express()

var SchemaOb = new mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String
});


var SchemaObModel = mongoose.model('bilalSchema', SchemaOb);


app.post('/post', function (req, res) {
    var schemaObModelOb = new SchemaObModel({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    schemaObModelOb.save(function(err,data){
        if(!err){
            res.send("schemaObModelOb-Object is saved")
            console.log("Object is saved")
        }else{
            console.log("Object saving failed");
            req.send("Object saving failed")
        }
    })
})




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