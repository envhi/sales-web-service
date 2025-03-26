const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASS),
    port: process.env.DB_PORT
})

module.exports = { pool }


// docker run --name sales_db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=1234 -p 5432:5432 -d postgres


