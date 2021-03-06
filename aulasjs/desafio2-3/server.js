const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const articles = require('./data')

const port = 3000

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false
})

server.get('/', function(req, res) {
    const about = {
        subTitleH3: "Principais tecnologias",
        listItems: [
           { list: "JavaScript" },
           { list: "TypeScript" },
            { list: "Node.js" },
            { list: "ReactJs" },
            { list: "React Native" },
        ],
        links: [
            { name: "Github", link: "https://github.com/Rocketseat" }, 
            { name: "Instagram", link: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br" }, 
            { name: "Facebook", link: "https://pt-br.facebook.com/rocketseat/" }
        ]
    }

    return res.render('about', { about })
})

server.get('/courses', function(req, res) {
    return res.render('courses', { items: articles })
})

server.use(function(req, res) {
    res.status(400).render('not-found')
})

server.listen(port, function() {
    console.log('Server is running')
})