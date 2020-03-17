var express = require('express');
var home = require('./routes/home');
var customer = require('./routes/customer');
var app = express();

/*
app.get('/', function(req, res) {
    res.send('Welcome to Express Test!!');
});

app.get('/customers', function(req, res) {
    res.send('Welcome to Express Test - Customers section (con nodemon)!!');
});

app.get('/customers/create', (req, res) => {
    res.send('GET request to the homepage')
})
*/

app.get('/', home.index);
app.get('/customer', customer.index);
app.get('/customer/contact', customer.contact);


app.listen(3000);