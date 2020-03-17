var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Welcome to Express Test!!');
});

app.get('/customers', function(req, res) {
    res.send('Welcome to Express Test - Customers section!!');
});


app.listen(3000);