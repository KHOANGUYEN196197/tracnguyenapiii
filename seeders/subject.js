const subjectSeeding = (db) => {
  return db.subject.bulkCreate([
    {name: "Hóa"},
    {name: "Lý"},
    {name: "Sử"},
    {name: "Địa"},
    {name: "Sinh"},
    {name: "Tin Học"},
  ]);
};

module.exports = subjectSeeding;
