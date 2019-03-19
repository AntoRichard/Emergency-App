const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const indexRoute = require('./routes/index');
const firstAidRoute = require('./routes/firstAid');
const emergencyRoute = require('./routes/emergency');
const findLocationRoute = require('./routes/findLocation');
const addTips = require('./routes/addTips');
const alertRoute = require('./routes/alert');
const DetailsRoute = require('./routes/details');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost/MedicalApp');


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(indexRoute);
app.use(firstAidRoute);
app.use(emergencyRoute);
app.use(findLocationRoute);
app.use(addTips);
app.use(alertRoute);
app.use(DetailsRoute);

app.get('/show', (req, res) => {
    let data;

    fs.readFile('tips.txt', function (err, buf) {
        data = buf.toString().split(',');
        console.log(data);
        res.render('show', {
            data: data
        });
    });
});



app.listen(PORT, () => {
    console.log(`Server running in PORT : ${PORT}`);
});