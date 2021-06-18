const { Router } = require("express");
const { isAuth } = require("../middleware/index");
const categoryRoutes = require("./routes/category");
const authRoutes = require("./routes/auth");
const questionRoutes = require("./routes/question");
const answerRoutes = require("./routes/answer");
const levelRoutes = require("./routes/level");
const testRoutes = require("./routes/test");
const userRoutes = require("./routes/user");
const roleRoutes = require("./routes/role");
const feedbackRoutes = require("./routes/feedback");
const subjectRoutes = require("./routes/subject");

const baseRoutes = (controller, route, middleware) => {
  if (middleware === "ignoreGet")
    middleware = [[], [], [isAuth], [isAuth], [isAuth]];
  if (!middleware) middleware = [[], [], [], [], []];

  route.get("/one", ...middleware[0], controller.getOne);
  route.get("/", ...middleware[1], controller.getAll);
  route.post("/", ...middleware[2], controller.create);
  route.put("/", ...middleware[3], controller.update);
  route.delete("/:id", ...middleware[4], controller.delete);
};

const apiRoutes = () => {
  const app = Router();

  categoryRoutes(app, baseRoutes);
  authRoutes(app, baseRoutes);
  questionRoutes(app, baseRoutes);
  answerRoutes(app, baseRoutes);
  levelRoutes(app, baseRoutes);
  testRoutes(app, baseRoutes);
  userRoutes(app, baseRoutes);
  roleRoutes(app, baseRoutes);
  feedbackRoutes(app, baseRoutes);
  subjectRoutes(app, baseRoutes);
  return app;
};

module.exports = apiRoutes;
