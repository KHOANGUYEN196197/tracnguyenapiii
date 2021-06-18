const config = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || "localhost",
  db: {
    name: process.env.DB || "final",
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD||"123456",
    dialect: process.env.DB_DIALECT||"mysql",
  },
  tokenSecret: process.env.TOKEN_SECRET||"hallelujah",
};

module.exports = config;
