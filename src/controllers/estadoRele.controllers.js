const catchError = require('../utils/catchError.js');
const EstadoRele = require('../models/EstadoRele.js');

// Obtener historial completo de estados del relé
const getAll = catchError(async (req, res) => {
  const results = await EstadoRele.findAll();
  return res.json(results);
});

// Crear un nuevo estado (por ejemplo, "on" o "off")
const create = catchError(async (req, res) => {
  const result = await EstadoRele.create(req.body);
  return res.status(201).json(result);
});

// Obtener último estado actual de un dispositivo y pin
const getEstadoActual = catchError(async (req, res) => {
  const { device_id, pin } = req.params;
  const ultimo = await EstadoRele.findOne({
    where: { device_id, pin },
    order: [['timestamp', 'DESC']]
  });
  if (!ultimo) return res.status(404).json({ message: 'Sin registros previos' });
  return res.json(ultimo);
});

// Eliminar un estado (opcional)
const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await EstadoRele.destroy({ where: { id } });
  return res.sendStatus(204);
});

module.exports = {
  getAll,
  create,
  getEstadoActual,
  remove
};
