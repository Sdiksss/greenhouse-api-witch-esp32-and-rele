const { getAll, create, getEstadoActual, remove } = require('../controllers/estadoRele.controllers.js');
const express = require('express');

const estadoReleRouter = express.Router();

estadoReleRouter.route('/estado-rele')
    .get(getAll)
    .post(create);

estadoReleRouter.route('/estado-rele/:id')
    .delete(remove);

// Ruta para obtener el estado actual por device_id y pin
estadoReleRouter.route('/estado-rele/:device_id/:pin')
    .get(getEstadoActual);

module.exports = estadoReleRouter;
