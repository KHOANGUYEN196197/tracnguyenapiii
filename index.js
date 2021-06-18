const express = require("express");
const dotenv = require("dotenv").config();
const loaders = require("./loaders");
const config = require("./config");

async function startServer() {
  const app = express();

  global.dash = "--------------";

  await loaders(app);

  app.listen(config.port, (err) => {
    if (err) return;
    console.log(`Server is running at port ${config.port}`);
  });
}

startServer();
