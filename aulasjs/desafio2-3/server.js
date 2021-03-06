const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const port = 3000

server.use(express.static('public'))

server.set('view engine', 'html')

nunjucks.configure('views', {
    express: server,
    autoescape: false
})

server.get('/', function(req, res) {
    return res.render('about')
})

server.get('/courses', function(req, res) {
    return res.render('courses')
})

// server.use(function(req, res) {
//     res.status(400).render('not-found')
// })

server.listen(port, function() {
    console.log('Server is running')
})