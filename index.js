var express = require('express');
var fs = require('fs');
var app = express();
var path = require('path');
var public = __dirname + "/public/";
var images = __dirname + "/public/images/";

var content = JSON.parse(fs.readFileSync('public/content.json', 'utf8'));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// viewed at http://localhost:8080

app.get('/', function(req, res) {
    res.sendFile(path.join(public + "index.html"));
    //res.json(content)
});
app.get('/api', function(req, res) {
    //res.sendFile(path.join(public + "index.html"));
    res.json(content)
});
app.get('/pics/:id', function(req, res) {
    var id = req.params.id
    setTimeout(function () {
        res.sendFile(path.join(images + id  +".jpg"));
    },1000)
});


app.use('/', express.static(public));

app.listen(process.env.PORT || 3000);