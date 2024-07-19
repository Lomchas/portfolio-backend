const express = require('express');
const controller = require('../controllers/index.controller');
const router = express.Router();

router.get('/', controller.index)

router.get('/aboutMe', controller.aboutMe)
router.get('/experiences', controller.experiences)
router.get('/projects', controller.projects)
router.post('/sendEmail', controller.sendEmail)

// router.post('/users', controller.createUser)

module.exports = router