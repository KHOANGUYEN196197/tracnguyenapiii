const bodyParser = require("body-parser");
const cors = require("cors");
const apiRoutes = require("../api");

const expressLoader = (app) => {
  app.use(cors());
  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Load API routes
  app.use("/api", apiRoutes());
  // app.use(config.api.prefix + "/admin", adminRoutes());

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err["status"] = 404;
    next(err);
  });

  /// error handlers
  app.use((err, req, res, next) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === "UnauthorizedError") {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });

  app.use((err, req, res, next) => {
    console.log(global.dash + "error", err);
    res.status(err.status || 500);
    res.json({
      message: err.message,
    });
  });
};

module.exports = expressLoader;
