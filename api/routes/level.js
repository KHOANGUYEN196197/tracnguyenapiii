const { Router } = require("express");
const { isAuth } = require("../../middleware");
const LevelController = require("../controllers/level");

const route = Router();

const levelRoutes = (app, baseRoutes) => {
  const controller = new LevelController();
  app.use("/level", route);

  baseRoutes(controller, route, "ignoreGet");
};

module.exports = levelRoutes;
