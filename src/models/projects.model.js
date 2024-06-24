const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    url_repository: String,
    url_deploy: String,
    img: String
}); 


const projectsSchema = new mongoose.Schema({
    frontend_projects: [projectSchema],
    backend_projects: [projectSchema]
});

const Project = mongoose.model('projects', projectsSchema);

module.exports = Project;