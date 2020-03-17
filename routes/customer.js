var index = function(req, res) {
    res.send('Welcome to the customer index!');
}

var contact = function(req, res) {
    res.send('Welcome to the customer contact!');
}

exports.index = index;
exports.contact = contact;