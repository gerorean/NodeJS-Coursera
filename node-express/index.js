//1.6.1 -1.6.2 -1.6.2.b
//Modules
const express = require('express');
const http = require('http');
const morgan = require('morgan');//Serving static HTML files
const bodyParser = require('body-parser');//To parse the body of the request message
const dishRouter = require('./routes/dishRouter');//Dish router
const promoRouter = require('./routes/promoRouter');//Promo router
const leaderRouter = require('./routes/leaderRouter');//Leader router
//Constants
const hostname = 'localhost';
const port = 3000;
//Object
const app = express();
//Call objects
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
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