const db = require("../models");
const databaseSeeding = require("../seeders/index");

const sequelizeLoader = async () => {
  await db.sequelize.sync({ force: true });
  databaseSeeding();
};

module.exports = sequelizeLoader;
