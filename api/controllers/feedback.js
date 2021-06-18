const BaseController = require("../../base/controller");
const FeedbackService = require("../../services/feedback");

class FeedbackController extends BaseController {
  constructor() {
    super();
    this._mainService = new FeedbackService();
  }
  getAll = async (req, res, next) => {
    try {
      const response = await this._mainService.getAll(req.query);
      return this.paging(res, response);
    } catch (error) {
      return next(error);
    }
  };
  getOne = async (req, res, next) => {
    try {
      const response = await this._mainService.getOne(req.query);
      return this.ok(res, response);
    } catch (error) {
      return next(error);
    }
  };
  getAvgRating = async (req, res, next) => {
    try {
      const result = await this._mainService.getAvgRating();
      return this.ok(res, { avgRate: result[0].avgRate });
    } catch (error) {
      return next(error);
    }
  };
  getRatingStatistic = async (req, res, next) => {
    try {
      const query = [];
      for (let i = 1; i <= 5; i++)
        query.push(this._mainService.getRatingAmount(i));
      const results = await Promise.all(query);

      const rating = [];
      let count = 1;
      for (const item of results) {
        if (item[0].amount)
          rating.push({
            rate: count++,
            amount: item[0].amount,
          });
        else
          rating.push({
            rate: count++,
            amount: 0,
          });
      }

      return this.ok(res, rating);
    } catch (error) {
      return next(error);
    }
  };
}

module.exports = FeedbackController;
