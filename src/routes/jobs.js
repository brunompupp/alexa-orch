const express = require('express');
const controllers = require('../controllers/jobs');
const api = require('../services/auth');
const routes = express.Router();

routes.get('/', controllers.buscaJobs);
routes.post('/', controllers.startJob)

module.exports = routes;