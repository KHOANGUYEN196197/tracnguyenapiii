const BaseController = require("../../base/controller");
const SubjectService = require("../../services/subject");

class SubjectController extends BaseController {
  constructor() {
    super();
    this._mainService = new SubjectService();
  }
}

module.exports = SubjectController;
