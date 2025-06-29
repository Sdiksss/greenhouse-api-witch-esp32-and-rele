const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const EstadoRele = sequelize.define('estado_rele', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  device_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pin: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING, // "on" o "off"
    allowNull: false,
  },
  causa: {
    type: DataTypes.STRING, // Ej: "temp > 30", "manual", etc.
    allowNull: true,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  }
}, {
  timestamps: false,
});

module.exports = EstadoRele;
