const createProductValidationSchema = require('../validation/createProductValidationSchema');
const { BadRequestError } = require('../helpers/ApiError');

const createProductValidationMiddleware = async (req, res, next) => {

    try {
        await createProductValidationSchema.validate(req.body, { abortEarly: false })
    } catch (error) {
        throw new BadRequestError(error.errors[0])
    }

    console.log('validou')
    next()

}

module.exports = createProductValidationMiddleware;