const { pool } = require('../db/db')
const { NotFoundError, BadRequestError } = require('../helpers/ApiError')
class EmployeeRepository {

    async getAllEmployees() {

        try {
            const result = await pool.query('SELECT * FROM products')

            const data = result.rows

            return data

        } catch (error) {
            throw new Error(error.message)
        }
    }

    async getEmployeeById(id) {
        const query = `SELECT name, birth_date, base_salary, sales_count, email FROM employees WHERE id = $1`

        const employee = await pool.query(query, [id])

        return employee

    }

    async getEmployeeByEmail(email) {
        const query = `SELECT email FROM employees WHERE email = $1`

        return await pool.query(query, [email])
    }


    async registerEmployee(newEmployeeData) {

        try {
            const query = `
                INSERT INTO employees (name, birth_date, base_salary, email, password_hash, phone)
                VALUES ($1, $2, $3, $4, $5, $6)
                RETURNING name
            `

            return await pool.query(query, newEmployeeData)
        } catch (error) {
            throw new BadRequestError(error.message)
        }

    }
}


module.exports = new EmployeeRepository()