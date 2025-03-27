const { UnauthorizedError } = require('../helpers/ApiError')
const productRepository = require('../repositories/ProductRepository')
const capitalize = require("../helpers/capitalize")

class ProductService {

    async getAllProducts() {
        const products = await productRepository.getAllProducts()

        return products
    }

    async getProductById(id) {

        return await productRepository.getProductById(parseInt(id))

    }

    // async getEmployeeByEmail(email) {
    //     return await employeeRepository.getEmployeeByEmail(email)
    // }

    async registerProduct(newProductData) {

        const dataValues = [
            capitalize(newProductData.name),
            newProductData.price,
            newProductData.stock,
            newProductData.productType,
            newProductData.employeeId // depois o id vai vir do token
        ]

        return await productRepository.registerProduct(dataValues)


    }
}


module.exports = new ProductService()