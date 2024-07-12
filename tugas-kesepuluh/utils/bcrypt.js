const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}
const comparePassword = async (password, hashedPassword) => {
    const comparedPassword = await bcrypt.compare(password, hashedPassword);
    return comparedPassword;
}

module.exports = { hashPassword, comparePassword };