var express = require('express');
var home = require('./routes/home');
var customer = require('./routes/customer');

var app = express();

app.set('title', 'Node Demo App');
//app.use(express.logger('dev'));
//app.use(express.favicon());
app.use(express.static(__dirname + '/public'));



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

app.get('/customer/:id', (req, res) => {
    res.send('Customer ID is ' + req.params.id);
})

// post?id=xx
app.get('/post', (req, res) => {
    res.send('Post ID is ' + req.query.id);
})

app.get('/title', (req, res) => {
    res.send('Title: ' + app.get('title'));
})


app.listen(3000);