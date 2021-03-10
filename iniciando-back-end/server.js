const express = require('express'); 
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data')
const port = 5000;

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
});



server.get("/", function(req, res) {
    const dataAbout = {
        avatar_url: "https://avatars0.githubusercontent.com/u/42327366?s=460&u=65f0f87120f758ea36d4efab2beed383523b4dc0&v=4",
        name: "Adonis Cipriano Silveira",
        role: "Estudante de programação WEB - Rocketseat",
        description: "Focado em aprender Front-End e Backend pelo curso LaunchBase da  <a href='https://rocketseat.com.br' target='_blank'>Rocketseat</a>",
        links: [
            { name: "Github", url: "https://github.com/adoniscs" },
            { name: "Twitter", url: "https://twitter.com/AdonisCipriano" },
            { name: "Linkedin", url: "https://www.linkedin.com/in/adonis-cipriano-silveira-811288ab" },
        ]
    }

    return res.render("about", { about: dataAbout });
});

server.get("/portifolio", function(req, res) {
    return res.render("portifolio", { items: videos });
});
 
server.use(function(req, res) {
    res.status(400).render("not-found");
});

server.listen(port, function() {
    console.log("Server is running");
});