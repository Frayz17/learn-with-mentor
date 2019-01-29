function merge(o1, o2) {
  const mergeObj = { ...o1 };

  Object.keys(o2).forEach(key => Object.assign(mergeObj, { [key]: o2[key] }));

  return mergeObj;
}

let o1 = { x: "x1" };
let o2 = { y: "y2", x: "x2" };

console.log(merge(o1, o2)); // {y: "y2", x: "x2"}
console.log(merge(o2, o1)); // {y: "y2", x: "x1"}
