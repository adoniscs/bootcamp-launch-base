const express = require('express'); 
const nunjucks = require('nunjucks');

const server = express();
const port = 5000;

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express:server
});



server.get("/", function(req, res) { // req = request | res = response
    return res.render("about");
});

server.get("/portifolio", function(req, res) {
    return res.render("portifolio");
});
 
server.use(function(req, res) {
    res.status(400).render("not-found");
});

server.listen(port, function() {
    console.log("Server is running");
});