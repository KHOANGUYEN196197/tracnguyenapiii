const BaseService = require("../base/service");

class LevelService extends BaseService {
  constructor() {
    super();
    this._model = this._db.level;
    this._Op = this._db.Sequelize.Op;
  }
}

module.exports = LevelService;
