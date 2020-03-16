const { genSalt, hash, compare } = require('bcrypt');
const SaltRounds = process.env.SALT || 10;

const generateHash = async (password) => {
    try {
        const salt = await genSalt(SaltRounds)
        const hashedPassword = await hash(password, salt);
        return hashedPassword;
    } catch (exception) {
        throw exception;
    }
}
const comparePasswords = async (hashedPassword, inputPassword) => {
    try {
        const areEqual = await compare(inputPassword, hashedPassword);
        return areEqual
    } catch (exception) {
        throw exception;
    }
}

module.exports = {
    generateHash,
    comparePasswords
}