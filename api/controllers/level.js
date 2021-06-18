const BaseController = require("../../base/controller");
const LevelService = require("../../services/level");

class LevelController extends BaseController {
  constructor() {
    super();
    this._mainService = new LevelService();
  }
}

module.exports = LevelController;
