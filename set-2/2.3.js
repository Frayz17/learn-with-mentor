function double(xs) {
  let arr = [];
  arr = xs.reduce((acc, curr) => {
    return [...acc, curr, curr];
  }, []);
  return arr;
}

// console.log(double([])); // []
console.log(double([1, 2])); // [1, 1]
// console.log(double([1, 2])); // [1, 1, 2, 2]
