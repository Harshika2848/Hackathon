const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware for JSON parsing

// Student data
const students = [
    { id: 1, name: 'Alice', course: 'Computer Science' },
    { id: 2, name: 'Bob', course: 'Electronics' },
    { id: 3, name: 'Charlie', course: 'Mechanical' }
];

// Default route returns student list
app.get('/', (req, res) => {
    res.json(students);
});
app.get('/students', (req, res) => {
    res.json(students);
});

//Get student by ID
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).send({ error: 'Student not found' });
    res.json(student);
});

// Add new student
app.post('/students', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// ✅ Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
