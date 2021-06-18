const BaseController = require("../../base/controller");
const CategoryService = require("../../services/category");

class CategoryController extends BaseController {
  constructor() {
    super();
    this._mainService = new CategoryService();
  }

  getAll = async (req, res, next) => {
    try {
      const response = await this._mainService.getAllWithSubject(req.query);
      return this.paging(res, response);
    } catch (error) {
      return next(error);
    }
  };
}

module.exports = CategoryController;
