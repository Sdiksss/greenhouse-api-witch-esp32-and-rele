const catchError = require('../utils/catchError');
const SensorT1 = require('../models/SensorT1');

const getAll = catchError(async (req, res) => {
    const results = await SensorT1.findAll();
    return res.json(results);
});

const create = catchError(async (req, res) => {
    const { temperature, humidity, device_id, timestamp } = req.body;

    const lectura = await SensorT1.create({
        timestamp: timestamp ? new Date(timestamp) : new Date(),
        temperature,
        humidity,
        device_id
    });

    return res.status(201).json({ message: "Lectura registrada", lectura });
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await SensorT1.findByPk(id);
    if (!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async (req, res) => {
    const { id } = req.params;
    await SensorT1.destroy({ where: { id } });
    return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await SensorT1.update(req.body, {
        where: { id },
        returning: true
    });
    if (result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
};
