const BaseController = require("../../base/controller");
const AnswerService = require("../../services/answer");

class AnswerController extends BaseController {
  constructor() {
    super();
    this._mainService = new AnswerService();
  }
}

module.exports = AnswerController;
