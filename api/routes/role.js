const { Router } = require("express");
const { isAuth } = require("../../middleware");
const RoleController = require("../controllers/role");

const route = Router();

const roleRoutes = (app, baseRoutes) => {
  const controller = new RoleController();
  app.use("/role", route);

  baseRoutes(controller, route, "ignoreGet");
};

module.exports = roleRoutes;
