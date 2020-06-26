require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});
const path = require("path");

module.exports = {
  dialect: "sqlite",
  storage:
    process.env.NODE_ENV === "test"
      ? path.resolve("__tests__", "database_test.sqlite")
      : path.resolve("src", "database", "database.sqlite"),
  logging: false,
};
