const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    password: String,
    job: String,
    location: String,
    description: String,
    avatar: String
});

module.exports = mongoose.model('User', userSchema);