const roleSeeding = (db) => {
  return db.role.bulkCreate([{ name: "admin" }, { name: "user" }]);
};

module.exports = roleSeeding;
