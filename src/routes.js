const express = require('express')
const router = express.Router()
const employeeController = require('./controllers/EmployeeController.js')
const createEmployeeValidationMiddleware = require('./middlewares/createEmployeeValidationMiddleware.js')

router.get('/employee', employeeController.getAllEmployees)
router.post('/employee/:id', employeeController.getEmployeeById)
router.post('/employee', createEmployeeValidationMiddleware, employeeController.registerEmployee)
// router.get('/employee', employeeController.getAllEmployees)

module.exports = router