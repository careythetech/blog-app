const express = require('express');
const Covid = require('../models/Covid');
const covidRouter = express.Router();

covidRouter.get('/', (req, res) => {
    Covid.find()
    .then((covid) => {
        res.json(covid);
    });
});

covidRouter.post('/add', (req, res) => {
    Covid.create(req.body)
    .then(() => {
        res.status(200).end();
    });
});

covidRouter.put('/:id', (req, res) => {
    Covid.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.status(200).end();
    });
});

covidRouter.delete('/:id', (req, res) => {
    Covid.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(200).end();
    });
});


module.exports = covidRouter;