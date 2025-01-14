var express = require('express');
var app = express();

app.get('/users/:id', function(req, res) {
    var users = [
        { id:1, name: 'Filan'},
        { id:2, name: 'Fisteku'},
        { id:3, name: 'det'}
    ]
    const user = users.find(item => {
        return item.id == req.params.id
    })

    res.send('Pershendetje ' + user.name)
})

app.listen(8011)

app.get('/books/:id', function(req, res) {
    var books = [
        { id:1, name: 'Lord Of The Rings'},
        { id:2, name: 'Bibla'},
        { id:3, name: 'To Kill a Mockingbird'}
    ]
    const book = books.find(item => {
        return item.id == req.params.id
    })

    res.send(`Here! You chose "` + book.name + `"`)
})


app.get('/produkte/:id', function(req, res) {
    var products = [
        { id:1, name: 'Bread'},
        { id:2, name: 'Apples'},
        { id:3, name: 'Coca Cola'}
    ]
    const product = products.find(item => {
        return item.id == req.params.id
    })
    
    res.send(`You want ` + product.name)
})