const student = {
    name: "Harshika",
    marks: [85, 92, 78, 90, 88] 
};

// Calculate total
const total = student.marks.reduce((sum, mark) => sum + mark, 0);

// Calculate average
const average = total / student.marks.length;

// Determine grade
let grade;
if (average >= 90) {
    grade = "A+";
} else if (average >= 75) {
    grade = "A";
} else if (average >= 50) {
    grade = "B";
} else {
    grade = "Fail";
}

console.log(`Student: ${student.name}`);
console.log(`Total Marks: ${total}`);
console.log(`Average: ${average}`);
console.log(`Grade: ${grade}`);
