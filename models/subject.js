module.exports = (sequelize, Sequelize, DataTypes) => {
  const Subject = sequelize.define("Subject", {
    name: {
      type: DataTypes.STRING,
    },
  });
  return Subject;
};
