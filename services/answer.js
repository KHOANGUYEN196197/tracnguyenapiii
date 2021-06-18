const BaseService = require("../base/service");

class AnswerService extends BaseService {
  constructor() {
    super();
    this._model = this._db.answer;
    this._Op = this._db.Sequelize.Op;
  }

  getAll = async ({ search, limit, offset, order, direction, questionId }) => {
    if (!search) search = "";
    if (!limit) limit = 10;
    if (!offset) offset = 0;
    if (!order) order = "id";
    if (!direction) direction = "DESC";

    const pagination = {
      order: [[order, direction]],
      limit: +limit,
      offset: +offset,
    };
    const filters = [];
    for (const key in this._model.rawAttributes) {
      filters.push({
        [key]: { [this._Op.substring]: search },
      });
    }

    if (questionId) {
      pagination.where = {
        [this._Op.and]: {
          [this._Op.or]: filters,
          "$question.id$": questionId,
        },
      };
    } else pagination.where = { [this._Op.or]: filters };
    return await this._model.findAndCountAll({
      ...pagination,
      include: [{ model: this._db.question, as: "question" }],
    });
  };

  getAllWithIds = async (ids) => {
    return await this._model.findAll({ where: { id: { [this._Op.in]: ids } } });
  };
}

module.exports = AnswerService;
