const express = require('express');
const controller = require('../controllers/index');
const routes = express.Router();

routes.post('/', controller.index);

module.exports = routes;