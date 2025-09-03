const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// In-memory "database"
let todos = [
  { id: uuidv4(), text: "Learn React" },
  { id: uuidv4(), text: "Build a Todo App" }
];

// Get all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post("/todos", (req, res) => {
  const newTodo = { id: uuidv4(), text: req.body.text };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
  todos = todos.filter(todo => todo.id !== req.params.id);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
