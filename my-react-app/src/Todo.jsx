import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      {tasks.map((item, index) => (
        <p key={index}>✔ {item}</p>
      ))}
    </>
  );
}

export default Todo;