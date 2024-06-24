const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    alias: {
        type: String,
        required: true
    },
    picture_url: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true    
    },
    phone: {
        type: String, 
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    github: {
        type: String, 
        required: true
    },
    linkedin: {
        type: String, 
        required: true
    }
})

const user = mongoose.model('users', UserSchema);

module.exports = user;

