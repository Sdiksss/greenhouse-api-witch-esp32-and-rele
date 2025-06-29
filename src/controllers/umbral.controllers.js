const Umbral = require('../models/Umbral');
const catchError = require('../utils/catchError');

// GET - Obtener todos los umbrales
const getAll = catchError(async (req, res) => {
  const results = await Umbral.findAll();
  return res.json(results);
});

// GET - Obtener umbral por device_id
const getOne = catchError(async (req, res) => {
  const { device_id } = req.params;
  const result = await Umbral.findByPk(device_id);
  if (!result) return res.status(404).json({ message: "Umbral no encontrado" });
  return res.json(result);
});

// UPDATE o CREATE - Usando upsert pero exportado como update
const update = catchError(async (req, res) => {
  const {
    device_id,
    temp_max,
    temp_min,
    humedad_max,
    humedad_min,
    modo
  } = req.body;

  const [umbral, created] = await Umbral.upsert({
    device_id,
    temp_max,
    temp_min,
    humedad_max,
    humedad_min,
    modo
  });

  return res.status(created ? 201 : 200).json({
    message: created ? "Umbral creado" : "Umbral actualizado",
    umbral
  });
});

// DELETE - Eliminar umbral
const remove = catchError(async (req, res) => {
  const { device_id } = req.params;
  await Umbral.destroy({ where: { device_id } });
  return res.sendStatus(204);
});

module.exports = {
  getAll,
  getOne,
  update,  // ✅ Aquí se exporta como update
  remove
};
