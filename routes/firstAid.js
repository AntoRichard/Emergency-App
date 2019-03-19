const express = require('express');
const tipsDB = require('../database/tips');
var fs = require('fs');

const Route = express.Router();

Route.get('/FirstAid', (req, res) => {
    res.render('firstAid');
});


Route.post('/FirstAid',(req,res)=>{
    let search = req.body.search;
    console.log(search);

    tipsDB.findOne({disease:search},(err,result)=>{
        if(err) throw err;
        console.log(result)
        let tips1 = result.tips1;
        let tips2 = result.tips2;
        let tips3 = result.tips3;
        data = [tips1,tips2,tips3];
        fs.writeFile('tips.txt', data, function(err, data){
            if (err) console.log(err);
            console.log("Successfully Written to File.");
        });

        // res.redirect('/show');
    })
});

module.exports = Route;