const express = require('express')
const router = express.Router()
const employeeController = require('./controllers/EmployeeController.js')
const createEmployeeValidationMiddleware = require('./middlewares/createEmployeeValidationMiddleware.js')
const productController = require('./controllers/ProductController.js')
const createProductValidationMiddleware = require('./middlewares/createProductValidationMiddleware.js')


// employee routes
router.get('/employee', employeeController.getAllEmployees)
router.get('/employee/:id', employeeController.getEmployeeById)

router.post('/employee', createEmployeeValidationMiddleware, employeeController.registerEmployee)



// product routes
router.get('/product', productController.getAllProducts)
router.get('/product/:id', productController.getProductById)

router.post('/product', createProductValidationMiddleware, productController.registerProduct)

module.exports = router