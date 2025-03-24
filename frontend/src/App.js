import "./App.css";
import React, { useEffect, useState } from "react";

import axios from "axios";
function App() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + "/api/user/tasks").then((res) => {
      console.log(res.data);
      setTasks(res.data);
    });
  }, []);

  const setAsDone = (taskId) => {
    axios
      .get(
        process.env.REACT_APP_API_URL + "/api/user/tasks/" + taskId + "/setDone"
      )
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
      });
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input type="text" />

      <ul>
        {tasks &&
          tasks.map((task) => (
            <li>
              {task.task} is it completed? {task.completed ? "yes" : "no"}{" "}
              <button
                type="button"
                onClick={() => {
                  setAsDone(task._id);
                }}
              >
                set as done
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
