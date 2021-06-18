const BaseService = require("../base/service");

class RoleService extends BaseService {
  constructor() {
    super();
    this._model = this._db.role;
    this._Op = this._db.Sequelize.Op;
  }
}

module.exports = RoleService;
