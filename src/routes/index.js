const express = require('express');
const umbralRouter = require('./umbral.router');
const estadoReleRouter = require('./estadoRele.router.js');
const sensorT1Router = require('./sensorT1.router');
const metalRouter = require('./metal.router.js');
const router = express.Router();


// colocar las rutas aquí


router.use(umbralRouter)
router.use(estadoReleRouter)
router.use(sensorT1Router)
router.use(metalRouter)


module.exports = router;