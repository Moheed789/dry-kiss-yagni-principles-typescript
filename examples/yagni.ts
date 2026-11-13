// YAGNI means: do not build a feature before it is needed.

type Student = {
  name: string;
  marks: number;
};

const student: Student = {
  name: "Noman",
  marks: 85,
};

// For now, we only need to show the student's result.
function showResult(currentStudent: Student): void {
  const result = currentStudent.marks >= 50 ? "Pass" : "Fail";
  console.log(`${currentStudent.name}: ${result}`);
}

console.log("YAGNI - build only needed features:");
showResult(student);

// We did not add an attendance chart, email alert, or ranking system.
// We can add one later if it is needed.
