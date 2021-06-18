const BaseService = require("../base/service");

class CategoryService extends BaseService {
  constructor() {
    super();
    this._model = this._db.category;
    this._Op = this._db.Sequelize.Op;
  }

  getAllWithSubject = async ({
    search,
    limit,
    offset,
    order,
    direction,
    subjectId,
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

    if (subjectId) {
      pagination.where = {
        [this._Op.and]: {
          [this._Op.or]: filters,
          "$subject.id$": subjectId,
        },
      };
    } else {
      pagination.where = {
        [this._Op.or]: filters,
      };
    }

    return await this._model.findAndCountAll({
      ...pagination,
      include: [
        {
          model: this._db.subject,
          as: "subject",
        },
      ],
    });
  };

  getListWithIds = (ids) => {
    return this._model.findAll({
      where: {
        id: {
          [this._Op.in]: ids,
        },
      },
    });
  };
}

module.exports = CategoryService;
