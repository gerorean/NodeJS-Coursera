//1.7
//Modules
const express = require('express');
const bodyParser = require('body-parser');
//Object
const promoRouter = express.Router();
//Call object
promoRouter.use(bodyParser.json());
promoRouter.route('/')
.all((req,res,next) => {
    //Response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    //Response
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    //Response
    res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    //Response
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    //Response
    res.end('Deleting all promotions');
});
//:promoId
promoRouter.route('/:promoId')
.get((req,res,next) => {
    //Response
    res.end('Will send details of the promo: ' + req.params.promoId +' to you!');
})
.post((req, res, next) => {
    //Response
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions/'+ req.params.promoId);
})
.put((req, res, next) => {
    //Response
    res.write('Updating the promo: ' + req.params.promoId + '\n');
    res.end('Will update the promo: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    //Response
    res.end('Deleting promo: ' + req.params.promoId);
});
//Exports
module.exports = promoRouter;