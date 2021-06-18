module.exports = (sequelize, Sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    name: {
      type: DataTypes.STRING,
    },
  });
  return Category;
};
