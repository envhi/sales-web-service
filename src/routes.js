const express = require('express')
const router = express.Router()
const { pool } = require('./db/db')

router.get('/', async (req, res) => {
    const result = await pool.query('SELECT * FROM products')

    const data = result.rows

    res.json(data)
})

module.exports = router