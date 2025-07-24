const { getAll, create, getOne, remove, update } = require('../controllers/metal.controllers');
const express = require('express');

const metalRouter = express.Router();

metalRouter.route('/metal')
    .get(getAll)
    .post(create);

metalRouter.route('/metal/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = metalRouter;