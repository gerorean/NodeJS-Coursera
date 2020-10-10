//1.6.2.b
//Modules
const express = require('express');
const bodyParser = require('body-parser');
//Object
const dishRouter = express.Router();
//Call object
dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all((req,res,next) => {
    //Response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    //Response
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    //Response
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    //Response
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    //Response
    res.end('Deleting all dishes');
});
//Exports
module.exports = dishRouter;