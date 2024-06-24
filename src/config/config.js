const mongoose = require('mongoose');
const user = require('../models/aboutMe.model.js');

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };



const dbconnect = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URLCONNECTION, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log('Connected to MongoDB--ATLAS!!')

    }
    catch (err) {
        console.error('Error connecting to MongoDB', err);
        process.exit(1); // call off if error received 
    }
}

module.exports = dbconnect