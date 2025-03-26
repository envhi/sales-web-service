require('dotenv').config()

module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: String(process.env.DB_PASS),
        database: process.env.DB_NAME,
      },
      migrations: {
        directory: './src/db/migrations', // Pasta onde as migrations serão salvas
      },
      seeds: {
        directory: './src/db/seeds', // Opcional: pasta para seeds
      },
    },
  };