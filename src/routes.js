const { Router } = require("express");
const sessionController = require("./app/controllers/sessionController");
const auth = require("./app/middleware/auth");

const routes = Router();

routes.post("/sessions", sessionController.store);

routes.use(auth);

routes.get("/dashboard", (req, res) => {
  return res.json();
});

module.exports = routes;
