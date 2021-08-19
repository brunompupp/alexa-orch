const express = require('express');
const controller = require('../controllers/auth');
const routes = express.Router();


routes.get('/', controller.index);
routes.post('/', controller.create);

module.exports = routes;