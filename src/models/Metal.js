const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Metal = sequelize.define('metal', {
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Metal;