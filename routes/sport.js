const express = require('express');
const Sport = require('../models/Sport');
const sportRouter = express.Router();

sportRouter.get('/', (req, res) => {
    Sport.find()
    .then((sport) => {
        res.json(sport);
    });
});

sportRouter.post('/add', (req, res) => {
    Sport.create(req.body)
    .then(() => {
        res.status(200).end();
    });
});

sportRouter.put('/:id', (req, res) => {
    Sport.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.status(200).end();
    });
});

sportRouter.delete('/:id', (req, res) => {
    Sport.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(200).end();
    });
});


module.exports = sportRouter;