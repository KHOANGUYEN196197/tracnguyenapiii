const BaseService = require("../base/service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");

class UserService extends BaseService {
  constructor() {
    super();
    this._model = this._db.user;
    this._Op = this._db.Sequelize.Op;
  }

  checkPassword = async (password, userPassword) => {
    return await bcrypt.compare(password, userPassword);
  };

  generatePassword = async (password) => {
    return await bcrypt.hash(password, 12);
  };

  generateToken = (payload) => {
    return jwt.sign(payload, config.tokenSecret);
  };
}

module.exports = UserService;
