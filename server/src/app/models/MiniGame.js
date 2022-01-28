const mongoose = require('mongoose');
const { Schema } = mongoose;

const miniGameSchema = new Schema({
    name: String,
    wallet: String,
    transfer: Boolean,
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('MiniGame', miniGameSchema);