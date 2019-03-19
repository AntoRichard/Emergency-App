const express = require('express');
const tipsDB = require('../database/tips');
const Route = express.Router();

Route.get('/add-tips', (req, res) => {
    res.render('addTips');
});

Route.post('/add-tips',(req,res)=>{
    let disease = req.body.disease;
    let tips1 = req.body.tips1;
    let tips2 = req.body.tips2;
    let tips3 = req.body.tips3;

    let data = {
        disease : disease,
        tips1 : tips1,
        tips2 : tips2,
        tips3 : tips3
    }

    console.log(data);

    tipsDB.create(data,(err,result)=>{
        if(err) throw err;
        console.log(result+'\n data stored in database');
        res.redirect('/add-tips');

    });
});

module.exports = Route;