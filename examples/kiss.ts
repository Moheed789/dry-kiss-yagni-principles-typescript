// KISS means: keep the code simple and easy to understand.

// Longer way: extra steps are used for a simple check.
function complicatedIsAdult(age: number): boolean {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// Simpler way: this check already gives true or false.
function isAdult(age: number): boolean {
  return age >= 18;
}

const studentAge = 20;
console.log("KISS - code ko simple rakho:");
console.log(`Age: ${studentAge}`);
console.log(`Long version: ${complicatedIsAdult(studentAge)}`);
console.log(`Simple version: ${isAdult(studentAge)}`);
