//1.7
//Modules
const express = require('express');
const bodyParser = require('body-parser');
//Object
const leaderRouter = express.Router();
//Call object
leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
.all((req,res,next) => {
    //Response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    //Response
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    //Response
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    //Response
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    //Response
    res.end('Deleting all leaders');
});
//:leaderId
leaderRouter.route('/:leaderId')
.get((req,res,next) => {
    //Response
    res.end('Will send details of the leader: ' + req.params.leaderId +' to you!');
})
.post((req, res, next) => {
    //Response
    res.statusCode = 403;
    res.end('POST operation not supported on /leaders/'+ req.params.leaderId);
})
.put((req, res, next) => {
    //Response
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    //Response
    res.end('Deleting leader: ' + req.params.leaderId);
});
//Exports
module.exports = leaderRouter;