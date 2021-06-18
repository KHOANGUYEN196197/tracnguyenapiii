const { Router } = require("express");
const { isAuth } = require("../../middleware");
const UserController = require("../controllers/user");

const route = Router();

const userRoutes = (app, baseRoutes) => {
  const controller = new UserController();
  app.use("/user", route);

  baseRoutes(controller, route, "ignoreGet");
  route.get("/highest-test", controller.getUsersWithHighestTest);
  route.get("/good-result", controller.getUserWithGoodTest);
  route.get("/result-subject", controller.getUserWithSubjectResult);
  route.get("/statistic-subject", controller.getSubjectStatistic);
  route.put("/change-password", controller.changePassword);
};

module.exports = userRoutes;
