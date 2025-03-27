const { UnauthorizedError } = require('../helpers/ApiError')
const employeeRepository = require('../repositories/EmployeeRepository')
const capitalize = require("../helpers/capitalize")
const passwordHash = require('../helpers/passwordHash')
class EmployeeService {

    async getAllEmployees() {
        const employees = await employeeRepository.getAllEmployees()

        return employees
    }

    async getEmployeeById(id) {

        return await employeeRepository.getEmployeeById(parseInt(id))

    }

    async getEmployeeByEmail(email) {
        return await employeeRepository.getEmployeeByEmail(email)
    }

    async registerEmployee(newEmployeeData) {

        const userExists = await this.getEmployeeByEmail(newEmployeeData.email)

        if (userExists.rowCount != 0) {
            throw new UnauthorizedError("Email already registered")
        }

        const dataValues = [
            capitalize(newEmployeeData.name),
            newEmployeeData.birthDate,
            newEmployeeData.baseSalary,
            newEmployeeData.email,
            await passwordHash(newEmployeeData.password),
            newEmployeeData.phone
        ]

        return await employeeRepository.registerEmployee(dataValues)


    }
}


module.exports = new EmployeeService()