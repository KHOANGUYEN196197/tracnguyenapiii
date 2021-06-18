const BaseService = require("../base/service");

class QuestionService extends BaseService {
  constructor() {
    super();
    this._model = this._db.question;
    this._Op = this._db.Sequelize.Op;
    this._literal = this._db.Sequelize.literal;
  }

  getAllWithCategory = async ({
    search,
    limit,
    offset,
    order,
    direction,
    categoryId,
  }) => {
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

    if (categoryId) {
      pagination.where = {
        [this._Op.and]: {
          [this._Op.or]: filters,
          "$category.id$": categoryId,
        },
      };
    } else pagination.where = { [this._Op.or]: filters };

    return await this._model.findAndCountAll({
      ...pagination,
      include: [{ model: this._db.category, as: "category" }],
    });
  };

  getOneWithAnswers = async (query) => {
    const filter = {};
    for (const key in query) filter[key] = query[key];
    return await this._model.findOne({
      where: filter,
      include: [{ model: this._db.answer, as: "answers" }],
    });
  };

  getListRandomWithCategory = async (cateId, levelId, limit) => {
    return this._model.findAll({
      where: {
        cateId,
        levelId,
      },
      order: this._literal("rand()"),
      limit,
    });
  };
}

module.exports = QuestionService;
