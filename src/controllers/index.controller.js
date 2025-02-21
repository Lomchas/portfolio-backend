const User = require('../models/aboutMe.model');
const experience = require('../models/experience.model');
const Project = require('../models/projects.model');
const homeTemplate = require('../views/homeTemplate');
const nodemailer = require('nodemailer')
const sendEmailTemplate = require('../views/sendEmailTemplate');

const controller = {};


controller.index = (req, res) => {
    res.send(homeTemplate)
};

controller.aboutMe = async (req, res) => {
    try {
        const userCollection = await User.find();
        return res.json(userCollection);
    }
    catch (error) {
        console.error('Error al obtener la informacion:', error);
        return res.status(500).json({ message: 'Error al obtener la informacion: ' + error });
    }
}

controller.projects = async (req, res) => {
    try {
        const projectsCollection = await Project.find();
        return res.json(projectsCollection);
    }
    catch (error) {
        console.error('Error al obtener la informacion:', error);
        return res.status(500).json({ message: 'Error al obtener la informacion: ' + error });
    }
}

controller.experiences = async (req, res) => {
    try {
        const experienceCollection = await experience.find();
        return res.json(experienceCollection);
    }
    catch (error) {
        console.error('Error al obtener la informacion:', error);
        return res.status(500).json({ message: 'Error al obtener la informacion: ' + error });
    }
}

controller.sendEmail = async (req, res) => {
    const { name, email, message } = req.body;

    const configEmail = {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    }

    const transporter = nodemailer.createTransport(configEmail)

    const mailOptions = {
        from: `PORTFOLIO-SERVICE <${email}>`,
        to: "webportfoliodaniellosada17@gmail.com",
        subject: `Portfolio: New message (${name})`,
        html: sendEmailTemplate(name, email, message),
    }

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email was sent successfully");
        res.status(200).json({ message: 'Email was sent successfully!' })
    }
    catch (error) {
        console.error(`Error sending email: ${error}`);
        res.status(500).json({ message: 'Error sending email: ', error });
    }
}

module.exports = controller;




