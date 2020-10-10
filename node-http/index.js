//1.5.1
//Modules
const http = require('http');
//Constants
const hostname = 'localhost';
const port = 3000;
//Objects
const server = http.createServer((req, res) => {
    console.log(req.headers);
    //Response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello, World!</h1></body></html>');
});
//Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
