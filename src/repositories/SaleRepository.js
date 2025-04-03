const { pool } = require('../db/db')

class SaleRepository {
    async registerSale(saleData) {

        saleData.push("SUCCESS")

        const queryInsertSale = `
                INSERT INTO sales (employee_id, product_id, price, sale_status)
                VALUES ($1, $2, $3, $4)
                RETURNING *
                `

        const queryUpdateStack = `
                UPDATE products
                SET stock = stock - 1
                WHERE id = $1
                `


        try {
            await pool.query('BEGIN')

            const insert = await pool.query(queryInsertSale, saleData)

            const update = await pool.query(queryUpdateStack, [saleData[1]])  // forma ruim de pegar o product id, mudar

            await pool.query('COMMIT')

            return insert
        } catch (error) {
            await pool.query('ROLLBACK')

            saleData.pop()

            saleData.push('CANCELED')

            const canceledSaleQuery = `
                INSERT INTO sales (employee_id, product_id, price, sale_status)
                VALUES ($1, $2, $3, $4)
                RETURNING *
            `

            const insertCanceledSale = await pool.query(canceledSaleQuery, saleData)

            return insertCanceledSale
        }
    }
}

module.exports = new SaleRepository()