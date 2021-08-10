const express = require('express');
const controller = require('../controllers/auth');
const routes = express.Router();


routes.get('/', controller.index);
routes.post('/', controller.auth);

module.exports = routes;