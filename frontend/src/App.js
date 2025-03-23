import "./App.css";
import React, { useEffect, useState } from "react";

import axios from "axios";
function App() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + "/api/user/tasks").then((res) => {
      setTasks(res.data);
    });
  }, []);

  return (
    <div>
      <h1>hellossszzz?</h1>

      <ul>
        {tasks &&
          tasks.map((task) => (
            <li>
              {task.task} is it completed? {task.completed ? "yes" : "no"}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
