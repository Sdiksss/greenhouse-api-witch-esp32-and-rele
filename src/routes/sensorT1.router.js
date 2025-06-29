const { getAll, create, getOne, remove, update } = require('../controllers/sensorT1.controllers');
const express = require('express');

const sensorT1Router = express.Router();

sensorT1Router.route('/sensorT1')
    .get(getAll)
    .post(create);

sensorT1Router.route('/sensorT1/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = sensorT1Router;