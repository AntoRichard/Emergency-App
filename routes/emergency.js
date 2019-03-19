const express = require('express');

const Route = express.Router();

Route.get('/emergency', (req, res) => {
    res.render('emergency');
});

module.exports = Route;