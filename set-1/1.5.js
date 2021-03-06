const ifElse = (cond, ifTrue, ifFalse) => {
  if (cond) return ifTrue();
  return ifFalse();
};

let a = 0;
let b = 0;
let c = 0;
let d = 0;

const ifTrue = () => (a = 1);
const ifFalse = () => (b = 2);

console.log(ifElse(true, ifTrue, ifFalse));
console.log(a + " " + b);

// expected a = 1 b = 0
// result a = 1 b = 2

// console.log(true ? (c = 11) : (d = 22));
// console.log(c + " " + d);
// expected c = 11 d = 0
// result c = 11 d = 0

// conclusion: func assigns value to variable in arguments field
