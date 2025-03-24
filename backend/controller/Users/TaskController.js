const Task = require("../../models/Task");

const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

const setTaskAsDone = async (req, res) => {
  try {
    const { id } = req.params; // Get `id` from the URL
    const updatedTask = await Task.findByIdAndUpdate(
      id, // Find by ID
      { $set: { completed: true } }, // Update field
      { new: true, runValidators: true } // Return updated document & validate
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    const tasks = getTasks();

    res.json(tasks);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getTasks, setTaskAsDone };
