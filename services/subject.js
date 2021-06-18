const BaseService = require("../base/service");

class SubjectService extends BaseService {
  constructor() {
    super();
    this._model = this._db.subject;
    this._Op = this._db.Sequelize.Op;
  }
}

module.exports = SubjectService;
