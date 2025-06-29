const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Umbral = sequelize.define('umbral', {
  device_id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  temp_max: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 30,
  },
  humedad_max: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  humedad_min: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  modo: {
    type: DataTypes.ENUM('auto', 'manual'),
    allowNull: true,
  }
}, {
  timestamps: false,
});

module.exports = Umbral;
