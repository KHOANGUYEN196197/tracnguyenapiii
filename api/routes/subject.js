const { Router } = require("express");
const { isAuth } = require("../../middleware");
const SubjectController = require("../controllers/subject");

const route = Router();

const subjectRoutes = (app, baseRoutes) => {
  const controller = new SubjectController();
  app.use("/subject", route);

  baseRoutes(controller, route, "ignoreGet");
};

module.exports = subjectRoutes;
