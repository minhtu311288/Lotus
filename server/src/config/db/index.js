const mongoose = require('mongoose');
require('dotenv/config');

async function connect () {
    try {
        await mongoose.connect(process.env.CONNECT_DB_CLOUD);
        console.log("Connect to DB mongoDB successfully!");
    } catch (error) {
        console.error("Connection failed, please try!", error);
    }
    
}

module.exports = { connect };
