const mongoose = require('mongoose');

const tipsSchema = new mongoose.Schema({

    disease : String,
    tips1 : String,
    tips2 : String,
    tips3 : String

});

const tipsModel = mongoose.model('Tips',tipsSchema);

module.exports = tipsModel;