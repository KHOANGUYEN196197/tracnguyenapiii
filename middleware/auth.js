const jwt = require("jsonwebtoken");
const config = require("../config");

const isAuth = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    const error = new Error("Not authenticated.");
    error.status = 401;
    next(error);
  }
  const token = req.get("Authorization").split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, config.tokenSecret);
  } catch (error) {
    error.status = 500;
    next(error);
  }
  if (!decodedToken) {
    const error = new Error("Not authenticated.");
    error.status = 401;
    next(error);
  }
  req.tokenInfo = decodedToken;

  next();
};
module.exports = isAuth;
