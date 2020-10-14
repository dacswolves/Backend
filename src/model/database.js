var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'bddeportes', 
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;