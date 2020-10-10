//1.6.1
//Modules
const express = require('express');
const http = require('http');
//Constants
const hostname = 'localhost';
const port = 3000;
//Object
const app = express();
//Call object
app.use((req, res, next) => {
    console.log(req.headers);
    //Response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});
//Object
const server = http.createServer(app);
//Call object
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
