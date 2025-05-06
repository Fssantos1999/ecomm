require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: 5432,
  define: {
    timestamps: true,
    underscored: true,
  },
  migrations: {
    path: './database/migrations',
  },
  seeders: {
    path: './database/seeders',
  },
  models: {
    path: './src/models',
  },
});

module.exports = { sequelize }; 

