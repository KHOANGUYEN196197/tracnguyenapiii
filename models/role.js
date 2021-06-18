module.exports = (sequelize, Sequelize, DataTypes) => {
  const Role = sequelize.define("Role", {
    name: {
      type: DataTypes.STRING,
    },
  });
  return Role;
};
