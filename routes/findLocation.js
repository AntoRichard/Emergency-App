const express = require('express');

const Route = express.Router();

Route.get('/findLocation', (req, res) => {
    res.render('findLocation');
});

module.exports = Route;