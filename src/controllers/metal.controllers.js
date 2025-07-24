const catchError = require('../utils/catchError');
const Metal = require('../models/Metal');

// GET: Obtener el único estado (si existe)
const getAll = catchError(async (req, res) => {
    const results = await Metal.findAll();
    return res.json(results);
});

// POST: Crear o actualizar el único estado existente
const createOrUpdate = catchError(async (req, res) => {
    const { estado } = req.body;

    if (!estado || (estado !== 'on' && estado !== 'off')) {
        return res.status(400).json({ error: 'El campo "estado" es requerido y debe ser "on" u "off"' });
    }

    // Buscar si ya hay un estado
    let item = await Metal.findOne();

    if (item) {
        // Actualizar el existente
        await item.update({ estado });
        return res.json(item);
    } else {
        // Crear uno nuevo si no hay
        const newItem = await Metal.create({ estado });
        return res.status(201).json(newItem);
    }
});

// GET: Obtener uno por ID
const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Metal.findByPk(id);
    if (!result) return res.sendStatus(404);
    return res.json(result);
});

// DELETE: Eliminar por ID
const remove = catchError(async (req, res) => {
    const { id } = req.params;
    await Metal.destroy({ where: { id } });
    return res.sendStatus(204);
});

// PUT: Actualizar por ID
const update = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Metal.update(req.body, {
        where: { id },
        returning: true
    });
    if (result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create: createOrUpdate,
    getOne,
    remove,
    update
};
