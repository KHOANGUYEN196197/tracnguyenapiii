const { Router } = require("express");
const { isAuth } = require("../../middleware");
const UserController = require("../controllers/user");

const route = Router();

const authRoutes = (app, baseRoutes) => {
  const controller = new UserController();
  app.use("/auth", route);

  route.post("/login", controller.login);
  route.post("/signup", controller.signup);
};

module.exports = authRoutes;
