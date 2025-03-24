const express = require("express");
const {
  getTasks,
  setTaskAsDone,
} = require("../controller/Users/TaskController.js");

const router = express.Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id/setDone", setTaskAsDone);

module.exports = router;
