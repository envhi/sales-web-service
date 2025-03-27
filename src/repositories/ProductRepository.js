const { pool } = require('../db/db')
const { NotFoundError, BadRequestError } = require('../helpers/ApiError')

class ProductRepository {

    async getAllProducts() {
            const result = await pool.query('SELECT * FROM products')

            const data = result.rows

            return data
    }

    async getProductById(id) {
        const query = `SELECT name, price, stock, product_type, employee_id FROM products WHERE id = $1`

        const product = await pool.query(query, [id])

        return product

    }

    async registerProduct(newProductData) {

        try {
            const query = `
                INSERT INTO products (name, price, stock, product_type, employee_id)
                VALUES ($1, $2, $3, $4, $5)
                RETURNING name
            `

            return await pool.query(query, newProductData)
        } catch (error) {
            throw new BadRequestError(error.message)
        }

    }
}


module.exports = new ProductRepository()