const { Router } = require("express");
const { isAuth } = require("../../middleware");
const CategoryController = require("../controllers/category");

const route = Router();

const categoryRoutes = (app, baseRoutes) => {
  const controller = new CategoryController();
  app.use("/category", route);

  baseRoutes(controller, route, "ignoreGet");
};

module.exports = categoryRoutes;
