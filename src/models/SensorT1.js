const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const SensorT1 = sequelize.define('sensort1', {
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  temperature: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  humidity: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  device_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, // desactiva createdAt y updatedAt de Sequelize
});

module.exports = SensorT1;
