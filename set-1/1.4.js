let add = (a, b) => {
  return a + b;
};

let subtract = (a, b) => {
  return a - b;
};

let multiply = (a, b) => {
  return a * b;
};

let divide = (a, b) => {
  return a / b;
};

console.log([1, 2, 3].reduce(add, 0));
console.log([1, 2, 3].reduce((x, y) => x + y, 0));

// 1. we can't use operators like callbacks in high-order functions.
// 2. operators have the priority attr. x = 5 + (4 * 7);
// 3. we can use many operators in one statement;
// 4. functions can done a complex actions for appropriate output.
// 5. functions may has side effects.
// 6. functions can have another functions inside.
// 7. functions can be recursive.
// 8. functions can output different datatypes or even do not output anything.
