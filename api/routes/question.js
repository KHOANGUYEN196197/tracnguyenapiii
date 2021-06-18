const { Router } = require("express");
const { isAuth } = require("../../middleware");
const QuestionController = require("../controllers/question");

const route = Router();

const questionRoutes = (app, baseRoutes) => {
  const controller = new QuestionController();
  app.use("/question", route);

  baseRoutes(controller, route, "ignoreGet");
};

module.exports = questionRoutes;
