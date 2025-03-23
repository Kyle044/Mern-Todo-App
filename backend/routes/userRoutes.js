const express = require("express");
const { getTasks } = require("../controller/Users/TaskController.js");

const router = express.Router();

router.get("/tasks", getTasks);

module.exports = router;
