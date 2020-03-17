const { generateHash, comparePasswords } = require('../../services/encrypt-decrypt')
module.exports = {
  test: async (req, res, next) => {
    try {
      console.log('==testing==');
      const x = await generateHash("PasswordEasy");
      let result = await comparePasswords(x, "PasswordEasy"); // true
      console.log(result)
      result = await comparePasswords(x, "  passwordEasy"); // false
      console.log(result)
      result = await comparePasswords(x, "Passwordeasy"); // false
      console.log(result)
    } catch (ex) {
      console.log(ex);
    }
    res.json({ message: 'done' })
  }
}