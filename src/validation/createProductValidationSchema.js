const yup = require('yup')

let registerProductSchema = yup.object({
    name: yup.string().min(3).max(255).required(),     
    productType: yup.string().oneOf(['hardware', 'tv', 'games', 'smartphone', 'home', 'other']).required(),    
    stock: yup.number().required(),  
    price: yup.number().required(),                                
    employeeId: yup.number().required()                                       
});


module.exports = registerProductSchema;


