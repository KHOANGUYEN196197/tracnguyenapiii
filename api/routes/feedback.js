const { Router } = require("express");
const { isAuth } = require("../../middleware");
const FeedbackController = require("../controllers/feedback");

const route = Router();

const feedbackRoutes = (app, baseRoutes) => {
  const controller = new FeedbackController();
  app.use("/feedback", route);

  baseRoutes(controller, route, "ignoreGet");
  route.get("/avg", controller.getAvgRating);
  route.get("/statistic", controller.getRatingStatistic);
};

module.exports = feedbackRoutes;
