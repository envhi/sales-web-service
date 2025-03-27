const { NotFoundError, BadRequestError } = require('../helpers/ApiError')
const productService = require('../services/ProductService')

class ProductController {

    async getAllProducts(req, res) {
        const products = await productService.getAllProducts()

        res.json(products.row[0])
    }

    async getProductById(req, res) {
        const { id } = req.params

        const product = await productService.getProductById(id)

        if (product.rowCount == 0) {
            throw new NotFoundError("Product not found")
        }

        res.json(product.rows[0])
    }

    async registerProduct(req, res) {
        const newProduct = await productService.registerProduct(req.body);

        res.status(201).json({msg: `Product ${newProduct.rows[0].name} registered successfully`})
    }
}

module.exports = new ProductController()