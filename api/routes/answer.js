const { Router } = require("express");
const { isAuth } = require("../../middleware");
const AnswerController = require("../controllers/answer");

const route = Router();

const answerRoutes = (app, baseRoutes) => {
  const controller = new AnswerController();
  app.use("/answer", route);

  baseRoutes(controller, route, "ignoreGet");
};

module.exports = answerRoutes;
