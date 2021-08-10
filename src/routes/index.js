const express = require('express');
const controller = require('../controllers/index');
const routes = express.Router();

routes.get('/', controller.index);
routes.post('/', controller.create);

module.exports = routes;