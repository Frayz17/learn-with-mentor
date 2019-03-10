function add(a, b) {
  if (typeof a === "undefined") {
    return function(a, b) {
      return a + b;
    };
  } else if (typeof b === "undefined") {
    return function(b) {
      return a + b;
    };
  }

  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add(1)(2)); // 3
console.log(add()(1, 2)); // 3
