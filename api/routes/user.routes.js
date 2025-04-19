const { Router } = require("express");
const { createUser } = require("../controllers/user.controller");

const USER_ROUTES = Router();

USER_ROUTES.post("/createUser", createUser);

module.exports = USER_ROUTES;
