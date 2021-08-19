const express = require('express');
const routes = express.Router();
const controller = require('../controllers/teste');

routes.get('/', controller.show);

module.exports = routes;