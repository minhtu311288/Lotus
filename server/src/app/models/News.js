const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsSchema = new Schema({
    title: String,
    image: String,
    description: String,
    id_cate: Number,
    content: String,
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('News', newsSchema);