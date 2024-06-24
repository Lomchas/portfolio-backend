const mongoose = require('mongoose')

const TechnologySchema = new mongoose.Schema({
    name: String,
    img: String,
    percent: Number,
    color: String
})

const experienceSchema = new mongoose.Schema({
    Frontend: [TechnologySchema],
    Backend: [TechnologySchema],
    Plus: [TechnologySchema]
})

const experience = mongoose.model('experience', experienceSchema);

module.exports = experience;