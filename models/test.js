module.exports = (sequelize, Sequelize, DataTypes) => {
  const Test = sequelize.define("Test", {
    time: {
      type: DataTypes.FLOAT,
    },
    amount: {
      type: DataTypes.FLOAT,
    },
    categoryIds: {
      type: DataTypes.TEXT,
    },
    questionIds: {
      type: DataTypes.TEXT,
    },
    answerIds: {
      type: DataTypes.TEXT,
    },
    level: {
      type: DataTypes.TEXT,
    },
    correctCount: {
      type: DataTypes.FLOAT,
    },
    wrongCount: {
      type: DataTypes.FLOAT,
    },
    finishTime: {
      type: DataTypes.TEXT,
    },
  });
  return Test;
};
