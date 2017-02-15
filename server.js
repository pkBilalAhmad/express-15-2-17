var express = require('express')
var mongoose = require('mongoose');
var bodyParser = require("body-parser");

var app = express()

var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies

var SchemaOb = new mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String
});


var SchemaObModel = mongoose.model('SchemaModel', SchemaOb);


app.post('/post', function (req, res) {
    var schemaObModelOb = new SchemaObModel({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    schemaObModelOb.save(function (err, data) {
        if (!err) {
            res.send("schemaObModelOb-Object is saved")
            console.log("Object is saved")
        } else {
            console.log("Object saving failed");
            req.send("Object saving failed")
        }
    })
})
app.get('/post', function (req, res) {
    var userName = req.param("userName");
    var firstName = req.param("firstName");
    var lastName = req.param("lastName");
    res.send(userName + ' ' + firstName + ' ' + lastName);
});

var list = [
    "Bilal", "ahmad", "akram", "khalid", "jameel", "mubashhir", "inaam", "arslan", "zamin"
]

app.get('/', function (req, res) {
    res.send('Hello Karachi 15-2-17')
})
app.get('/home', function (req, res) {
    res.send(list)
})

app.listen(port, function () {
    console.log('Example app listening on port 5000!')
})


mongoose.connect('mongodb://pkbilal:6363@ds153689.mlab.com:53689/express-15-2-17');

mongoose.connection.on('connected', function () {
    console.log("Mongoose is connected");
});