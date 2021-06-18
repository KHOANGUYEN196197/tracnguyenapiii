const bcrypt = require("bcryptjs");

const userSeeding = (db) => {
  const password = bcrypt.hashSync("12345678x@X", 12);
  return db.user.bulkCreate([
    {
      email: "admin@gmail.com",
      name: "Nguyễn Hữu Khoa",
      phone: "0352752676",
      password,
      roleId: 1,
    },
    {
      email: "user1@gmail.com",
      name: "Nguyễn User1",
      phone: "0123456789",
      password,
      roleId: 2,
    },
    {
      email: "user2@gmail.com",
      name: "Nguyễn User2",
      phone: "0123456789",
      password,
      roleId: 2,
    },
    {
      email: "user3@gmail.com",
      name: "Nguyễn User3",
      phone: "0123456789",
      password,
      roleId: 2,
    },
    {
      email: "user4@gmail.com",
      name: "Nguyễn User4",
      phone: "0123456789",
      password,
      roleId: 2,
    },
    {
      email: "user5@gmail.com",
      name: "Nguyễn User5",
      phone: "0123456789",
      password,
      roleId: 2,
    },
    {
      email: "user6@gmail.com",
      name: "Nguyễn User6",
      phone: "0123456789",
      password,
      roleId: 2,
    },
    {
      email: "user7@gmail.com",
      name: "Nguyễn User7",
      phone: "0123456789",
      password,
      roleId: 2,
    },
    {
      email: "user8@gmail.com",
      name: "Nguyễn User8",
      phone: "0123456789",
      password,
      roleId: 2,
    },
    {
      email: "user9@gmail.com",
      name: "Nguyễn User9",
      phone: "0123456789",
      password,
      roleId: 2,
    },
    {
      email: "user10@gmail.com",
      name: "Nguyễn User10",
      phone: "0123456789",
      password,
      roleId: 2,
    },
  ]);
};

module.exports = userSeeding;
