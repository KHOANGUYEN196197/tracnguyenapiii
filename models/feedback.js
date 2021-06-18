module.exports = (sequelize, Sequelize, DataTypes) => {
  const Feedback = sequelize.define("Feedback", {
    content: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    rate: {
      type: DataTypes.FLOAT,
    },
  });
  return Feedback;
};
