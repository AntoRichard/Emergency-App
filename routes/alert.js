const express = require('express');
const tipsDB = require('../database/tips');
const Route = express.Router();

Route.get('/alert', (req, res) => {
    res.render('alert');
});

module.exports = Route;