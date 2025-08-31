import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let students = [
  { id: 1, name: "Riya", age: 20, course: "Math" },
  { id: 2, name: "Radha", age: 22, course: "Physics" },
  { id: 3, name: "Charu", age: 21, course: "Chemistry" },
];

app.get("/api/students", (req, res) => res.json(students));

app.post("/api/students", (req, res) => {
  const newStudent = { id: Date.now(), ...req.body };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.listen(5000, () => console.log("✅ Backend running at http://localhost:5000"));
