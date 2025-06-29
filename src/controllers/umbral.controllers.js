const Umbral = require('../models/Umbral');
const catchError = require('../utils/catchError');

// Obtener todos los umbrales (útil para frontend)
const getAll = catchError(async (req, res) => {
  const results = await Umbral.findAll();
  return res.json(results);
});

// Obtener umbral por device_id (lo usa el ESP32)
const getOne = catchError(async (req, res) => {
  const { device_id } = req.params;
  const result = await Umbral.findByPk(device_id);
  if (!result) return res.status(404).json({ message: "Umbral no encontrado" });
  return res.json(result);
});

// Actualizar umbral existente (NO CREA)
const update = catchError(async (req, res) => {
  const {
    device_id,
    temp_max,
    temp_min,
    humedad_max,
    humedad_min,
    modo
  } = req.body;

  const umbral = await Umbral.findByPk(device_id);

  if (!umbral) {
    return res.status(404).json({ message: "El umbral no existe, no se puede actualizar" });
  }

  await umbral.update({
  temp_max: temp_max ?? umbral.temp_max,
  temp_min: temp_min ?? umbral.temp_min,
  humedad_max: humedad_max ?? umbral.humedad_max,
  humedad_min: humedad_min ?? umbral.humedad_min,
  modo: modo ?? umbral.modo
});




  return res.json({
    message: "Umbral actualizado",
    umbral
  });
});

// Eliminar umbral por device_id (por si necesitas limpiar datos)
const remove = catchError(async (req, res) => {
  const { device_id } = req.params;
  await Umbral.destroy({ where: { device_id } });
  return res.sendStatus(204);
});

module.exports = {
  getAll,
  getOne,
  update, // Antes era upsert
  remove
};
