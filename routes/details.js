const express = require('express');

const route = express.Router();

route.get('/details', (req, res) => {

    res.render('detail');
});


module.exports = route;