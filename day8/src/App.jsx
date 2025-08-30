import { useState } from "react";
import "./App.css";

export default function App() {
  const [task, setTask] = useState(""); // input value
  const [tasks, setTasks] = useState([]); // list of tasks

  // Add new task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  // Toggle completed status
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Remove a task
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Clear all tasks
  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div className="app">
      <h1>To-Do List ✅</h1>

      {/* Input + Button */}
      <div className="input-group">
        <input
          type="text"
          value={task}
          placeholder="Enter a task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* Task List */}
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className={t.completed ? "completed" : ""}>
            <span onClick={() => toggleTask(index)}>{t.text}</span>
            <button className="delete-btn" onClick={() => removeTask(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>

      {/* Clear All Button */}
      {tasks.length > 0 && (
        <button className="clear-btn" onClick={clearAll}>
          Clear All
        </button>
      )}
    </div>
  );
}
