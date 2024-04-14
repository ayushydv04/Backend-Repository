
const http = require('http');

// 1. createServer --> To create a server

const server = http.createServer(function(req, res){
    res.end("Hello World!!");
    console.log("Server Created Successfully");
})

server.listen(3000);
