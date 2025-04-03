const saleRepository = require("../repositories/SaleRepository")

class SaleService {
    async registerSale(saleData) {
        
        //  verificar o product id;
        //  o employeeId nao precisa pq vai vir do token
        //  verificar o estoque?
        // 

        const saleValues = [
            saleData.employeeId,
            saleData.productId,
            saleData.price
        ]

        return await saleRepository.registerSale(saleValues)
    }
}

module.exports = new SaleService()