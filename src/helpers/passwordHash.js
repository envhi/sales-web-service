const bcrypt = require('bcrypt')

const passwordHash = async (plainText) => {
    const saltRounds = 10;
    return await bcrypt.hash(plainText, saltRounds);
}


module.exports = passwordHash