// student-api.js
import express from "express";

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.static("public"));


// Temporary in-memory "database"
let students = [
  { id: 1, name: "Payal", age: 20 },
  { id: 2, name: "Priya", age: 22 },
];

// ------------------ CRUD ROUTES ------------------

// GET all students
app.get("/students", (req, res) => {
  res.json(students);
});

// GET a single student by id
app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});

// POST (create) a new student
app.post("/students", (req, res) => {
  const { name, age } = req.body;
  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name,
    age,
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT (update) an existing student
app.put("/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });

  const { name, age } = req.body;
  student.name = name ?? student.name;
  student.age = age ?? student.age;

  res.json(student);
});

// DELETE a student
app.delete("/students/:id", (req, res) => {
  const index = students.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Student not found" });

  const deletedStudent = students.splice(index, 1);
  res.json(deletedStudent[0]);
});

// -------------------------------------------------

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
