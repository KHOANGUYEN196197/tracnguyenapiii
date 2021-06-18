module.exports = (sequelize, Sequelize, DataTypes) => {
  const Question = sequelize.define("Question", {
    content: {
      type: DataTypes.TEXT,
    },
  });
  return Question;
};
