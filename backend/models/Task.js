const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: String,
  completed: Boolean,
});

module.exports = mongoose.model("Task", taskSchema);
