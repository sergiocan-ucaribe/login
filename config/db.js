const mongoose = require("mongoose");
const User = require("../models/User");

class Controller {
  constructor() {
    this.connect();
  }
  async connect() {
    try {
      await mongoose.connect(process.env.DB_HOST, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      console.log("conectado a la BD")
    } catch (e) {
      console.error(e)
    }
  }
  getUsers(res) {
    User.find({}, (err, users) => {
      if (err) throw err;
      res.send(users);
    })
  }
}

exports.controller = new Controller()