require('dotenv').config()
const { pool } = require('./db/db')
const express = require('express')
const router = require('./routes')
const errorMiddleware = require('./middlewares/errorMiddleware')

const app = express()

app.use(express.json())

app.use(router)

app.use(errorMiddleware)

app.listen(3000, () => console.log('server running'))