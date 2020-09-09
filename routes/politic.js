const express = require('express');
const Politic = require('../models/Politic');
const politicRouter = express.Router();

politicRouter.get('/', (req, res) => {
    Politic.find()
    .then((politic) => {
        res.json(politic);
    });
});

politicRouter.post('/add', (req, res) => {
    Politic.create(req.body)
    .then(() => {
        res.status(200).end();
    });
});

politicRouter.put('/:id', (req, res) => {
    Politic.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.status(200).end();
    });
});

politicRouter.delete('/:id', (req, res) => {
    Politic.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(200).end();
    });
});


module.exports = politicRouter;