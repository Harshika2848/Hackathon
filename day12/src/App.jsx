
import React, { useState, useEffect } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Fetch todos from backend
  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error("Error fetching todos:", err));
  }, []);

  // Add todo
  const addTodo = async () => {
    if (!newTodo.trim()) return;
    const res = await fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newTodo })
    });
    const data = await res.json();
    setTodos([...todos, data]);
    setNewTodo("");
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/todos/${id}`, { method: "DELETE" });
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}>
      <h1>📝 To-Do App</h1>

      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
          style={{ flex: 1, padding: "0.5rem" }}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0.5rem",
              background: "#f2f2f2",
              marginBottom: "0.5rem",
              borderRadius: "5px"
            }}
          >
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
