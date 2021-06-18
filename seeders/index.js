const db = require("../models");
const categorySeeding = require("./category");
const userSeeding = require("./user");
const roleSeeding = require("./role");
const levelSeeding = require("./level");
const subjectSeeding = require("./subject");
const questionSeeding = require("./question");
const answerSeeding = require("./answer");

const announce = (model) => console.log(`---- Seed ${model} complete ----`);

const databaseSeeding = () => {
  subjectSeeding(db).then(() => {
    categorySeeding(db).then(() => {
      questionSeeding(db).then(() => {
        answerSeeding(db).then(() =>
          announce("subject & category & question & answer")
        );
      });
    });
  });

  roleSeeding(db).then(() =>
    userSeeding(db).then(() => announce("user & role"))
  );
  levelSeeding(db).then(() => announce("level"));
};

module.exports = databaseSeeding;
