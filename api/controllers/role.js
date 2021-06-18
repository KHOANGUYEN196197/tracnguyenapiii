const BaseController = require("../../base/controller");
const RoleService = require("../../services/role");

class RoleController extends BaseController {
  constructor() {
    super();
    this._mainService = new RoleService();
  }
}

module.exports = RoleController;
