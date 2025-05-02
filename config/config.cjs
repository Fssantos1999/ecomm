require('dotenv').config(); // Carregar as variáveis de ambiente do .env

module.exports = {
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
    path: './database/migrations',  // Caminho das migrações
  },
  seeders: {
    path: './database/seeders',  // Caminho dos seeders
  },
  models: {
    path: './src/models',  // Caminho dos modelos
  }
};
