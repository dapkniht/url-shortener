const express = require("express");
const controller = require("./controller");
const routes = express.Router();

routes.post("/shorten", controller.shorten);
routes.get("/:short_code", controller.redirect);

module.exports = routes;
