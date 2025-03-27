const { NotFoundError, BadRequestError } = require('../helpers/ApiError')
const employeeService = require('../services/EmployeeService')

class EmployeeController {

    async getAllEmployees(req, res) {
        const employees = await employeeService.getAllEmployees()

        res.json(employees)
    }

    async getEmployeeById(req, res) {
        const { id } = req.params

        const employee = await employeeService.getEmployeeById(id)

        if (employee.rowCount == 0) {
            throw new NotFoundError("Employee not found")
        }

        res.json(employee.rows[0])
    }

    async registerEmployee(req, res) {
        const newEmployee = await employeeService.registerEmployee(req.body);     

        res.status(201).json({msg: `Employee ${newEmployee.rows[0].name} registered successfully`})
    }
}

module.exports = new EmployeeController()