const BaseController = require("../../base/controller");
const QuestionService = require("../../services/question");

class QuestionController extends BaseController {
  constructor() {
    super();
    this._mainService = new QuestionService();
  }

  getAll = async (req, res, next) => {
    try {
      const response = await this._mainService.getAllWithCategory(req.query);
      return this.paging(res, response);
    } catch (error) {
      return next(error);
    }
  };
}

module.exports = QuestionController;
