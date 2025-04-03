const saleService = require("../services/SaleService")

class SaleController {
    // id, X
    // employee_id,       // tudo no body, mas depois o employee id vai ser do token
    // product_id,
    // price,             // pegar do proprio produto ou mandar no body?
    // sale_status,
    // created_at X

    async registerSale(req, res) {
        const newSale = await saleService.registerSale(req.body)

        console.log(newSale.rows[0])

    }
}

module.exports = new SaleController()