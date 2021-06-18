const BaseService = require("../base/service");
const { QuestionLevels } = require("../ulti/constant");
const { QueryTypes } = require("sequelize");

class TestService extends BaseService {
  constructor() {
    super();
    this._model = this._db.test;
    this._Op = this._db.Sequelize.Op;
    this._sequelize = this._db.sequelize;
  }

  getAllWithFilter = async ({
    search,
    limit,
    offset,
    order,
    direction,
    subjectId,
    level,
    userId,
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

    const idFilter = [];
    if (subjectId) idFilter.push({ "$subject.id$": subjectId });
    if (level) idFilter.push({ level });
    if (userId) idFilter.push({ "$user.id$": userId });

    if (idFilter.length > 0) {
      pagination.where = {
        [this._Op.and]: [{ [this._Op.or]: filters }, ...idFilter],
      };
    } else pagination.where = { [this._Op.or]: filters };
    return await this._model.findAndCountAll({
      ...pagination,
      include: [
        { model: this._db.subject, as: "subject" },
        { model: this._db.user, as: "user" },
      ],
    });
  };
  getQuestionRequested = (
    categoryIds,
    levels,
    amount,
    limitUnderstand,
    limitUse,
    limitMaster
  ) => {
    const questionRequested = [];
    const totalQuestInCate = Math.floor(amount / categoryIds.length);
    let leftOver = amount - totalQuestInCate * categoryIds.length;

    const arrangedLevels = [];
    arrangedLevels.push(
      levels.find((item) => item.name === QuestionLevels.understand)
    );
    arrangedLevels.push(
      levels.find((item) => item.name === QuestionLevels.use)
    );
    arrangedLevels.push(
      levels.find((item) => item.name === QuestionLevels.master)
    );
    arrangedLevels.push(
      levels.find((item) => item.name === QuestionLevels.observe)
    );

    for (const cateId of categoryIds) {
      const limits = [];
      let tempTotal = totalQuestInCate;
      if (leftOver > 0) {
        tempTotal += 1;
        leftOver--;
      }

      for (const item of arrangedLevels) {
        if (item.name === QuestionLevels.understand) {
          limits.push(Math.round(limitUnderstand * tempTotal));
        } else if (item.name === QuestionLevels.use) {
          limits.push(Math.round(limitUse * tempTotal));
        } else if (item.name === QuestionLevels.master) {
          limits.push(Math.round(limitMaster * tempTotal));
        } else {
          limits.push(
            tempTotal - limits.reduce((total, number) => total + number, 0)
          );
        }

        const last = limits.length - 1;
        questionRequested.push({
          cateId: cateId,
          id: item.id,
          last: limits[last],
        });
      }
    }

    return questionRequested;
  };

  calculateResult = (resultPerCate) => {
    const { observe, understand, use, master } = QuestionLevels;
    const item = resultPerCate;
    const corrects =
      item[observe].correct * 1 +
      item[understand].correct * 2 +
      item[use].correct * 3 +
      item[master].correct * 4;
    const totals =
      item[observe].total * 1 +
      item[understand].total * 2 +
      item[use].total * 3 +
      item[master].total * 4;
    return (corrects / totals) * 10;
  };

  getTestResult = (questions, answers, categories, levelsMap) => {
    const { observe, understand, use, master } = QuestionLevels;
    const resultMap = {};

    for (const cate of categories) {
      resultMap[cate.id] = {
        [observe]: {
          correct: 0,
          total: 0,
        },
        [understand]: {
          correct: 0,
          total: 0,
        },
        [use]: {
          correct: 0,
          total: 0,
        },
        [master]: {
          correct: 0,
          total: 0,
        },
      };
    }

    for (const index in questions) {
      const question = questions[index];
      const answer = question.answers.find(
        (item) => item.id === +answers[index]
      );

      const level = levelsMap[question.levelId];
      if (answer && answer.isCorrect)
        resultMap[question.cateId][level].correct++;
      resultMap[question.cateId][level].total++;
    }

    for (const cateId in resultMap) {
      let percent = 0;
      let corrects = 0;
      let total = 0;
      for (const level in resultMap[cateId]) {
        const item = resultMap[cateId][level];
        corrects += item.correct;
        total += item.total;
      }
      resultMap[cateId].corrects = corrects;
      resultMap[cateId].total = total;
      resultMap[cateId].percent = corrects / total;
      resultMap[cateId].point = this.calculateResult(resultMap[cateId]);
      let status = "weak";
      if (resultMap[cateId].point >= 5 && resultMap[cateId].point < 7)
        status = "average";
      if (resultMap[cateId].point >= 7 && resultMap[cateId].point < 8.5)
        status = "good";
      if (resultMap[cateId].point >= 8.5) status = "perfect";
      resultMap[cateId].status = status;
    }

    for (const cate of categories) resultMap[cate.id].name = cate.name;
    return resultMap;
  };

  getListByCategory = (cateId, userId, limit = 100000) => {
    return this._model.findAll({
      where: {
        [this._Op.and]: {
          categoryIds: {
            [this._Op.or]: [
              { [this._Op.regexp]: `^${cateId},` },
              { [this._Op.regexp]: `,${cateId},` },
              { [this._Op.regexp]: `,${cateId}$` },
            ],
          },
          userId,
        },
      },
      order: [["id", "DESC"]],
      limit,
    });
  };
  getHighestTestByUsers = () => {
    return this._sequelize.query(
      "SELECT userId, name, count(userId) as amount FROM final.test INNER JOIN final.user on final.test.userId = final.user.id group by userId order by amount DESC",
      {
        type: QueryTypes.SELECT,
      }
    );
  };
}

module.exports = TestService;
