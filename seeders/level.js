const levelSeeding = (db) => {
  return db.level.bulkCreate([
    { name: "observe", point: 1 },
    { name: "understand", point: 2 },
    { name: "use", point: 3 },
    { name: "master", point: 4 },
  ]);
};

module.exports = levelSeeding;
