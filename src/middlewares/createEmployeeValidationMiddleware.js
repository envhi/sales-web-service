const createEmployeeValidationSchema = require('../validation/createEmployeeValidationSchema');
const { BadRequestError } = require('../helpers/ApiError');

const createEmployeeValidationMiddleware = async (req, res, next) => {

    try {
        await createEmployeeValidationSchema.validate(req.body, { abortEarly: false })
    } catch (error) {
        throw new BadRequestError(error.errors[0])
    }

    console.log('validou')
    next()

}

module.exports = createEmployeeValidationMiddleware;