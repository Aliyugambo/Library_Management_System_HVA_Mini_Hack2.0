const mongoose = require('mongoose');
const CONFIG = require("../config/config");
// const logger = require("../loging/logger");

// const MONGODB_URI = process.env.MONGODB_URI;

function connectToDb(){
  
    mongoose.connect(CONFIG.MONGODB_URL);

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB successfully');
    });

    mongoose.connection.on('error', (err) => {
        console.log(err);
    });
}

module.exports = connectToDb;