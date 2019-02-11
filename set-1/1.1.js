"use strict";

function merge(o1, o2) {
  return { ...o1, ...o2 };
}

let o1 = { x: "x1" };
let o2 = { y: "y2", x: "x2" };

console.log(merge(o1, o2)); // {y: "y2", x: "x2"}
console.log(merge(o2, o1)); // {y: "y2", x: "x1"
