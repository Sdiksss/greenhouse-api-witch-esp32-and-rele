const { getAll, getOne, remove, update } = require('../controllers/umbral.controllers');
const express = require('express');

const umbralRouter = express.Router();

umbralRouter.route('/umbral')
    .get(getAll)
    .post(update); // POST se usa para crear o actualizar

umbralRouter.route('/umbral/:device_id')
    .get(getOne)
    .delete(remove);

module.exports = umbralRouter;
