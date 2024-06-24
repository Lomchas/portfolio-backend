const dbconnect = require('../config/config')
const User = require('../models/aboutMe.model');
const experience = require('../models/experience.model');
const Project = require('../models/projects.model');
const mongoose = require('mongoose');

const controller = {};


controller.index = (req, res) => {
    res.send('Welcome to my first API')
};



controller.aboutMe = async (req, res) => {
    try{
        const userCollection = await User.find();
        return res.json(userCollection);
    }
    catch(error){
        console.error('Error al obtener la informacion:', error);
        return res.status(500).json({ message: 'Error al obtener la informacion: ' + error });
    }
}

controller.projects = async (req, res) => {
    try{
        const projectsCollection = await Project.find();
        return res.json(projectsCollection);
    }
    catch(error){
        console.error('Error al obtener la informacion:', error);
        return res.status(500).json({ message: 'Error al obtener la informacion: ' + error });
    }
}

controller.experiences = async (req, res) => {
    try{
        const experienceCollection = await experience.find();
        return res.json(experienceCollection);
    }
    catch(error){
        console.error('Error al obtener la informacion:', error);
        return res.status(500).json({ message: 'Error al obtener la informacion: ' + error });
    }
}


// controller.createUser = async (req, res) => {
//     try {
//         const newUser = new User({
//             _id: new mongoose.Types.ObjectId(),
//             name: req.body.name,
//             alias: req.body.alias,
//             picture_url: req.body.picture_url,
//             position: req.body.position,
//             email: req.body.email,
//             phone: req.body.phone,
//             location: req.body.location,
//             description: req.body.description,
//             github: req.body.github,
//             linkedin: req.body.linkedin
//         });

//         const savedUser = await newUser.save();
//         res.status(201).json(savedUser);
//     } catch (error) {
//         console.error('Error al crear un nuevo usuario:', error);
//         res.status(500).json({ message: 'Error al crear un nuevo usuario: ' + error.message });
//     }
// }


module.exports = controller;




