module.exports = (sequelize, Sequelize, DataTypes) => {
  const Level = sequelize.define("Level", {
    name: {
      type: DataTypes.STRING,
    },
    point: {
      type: DataTypes.FLOAT,
    },
  });
  return Level;
};
