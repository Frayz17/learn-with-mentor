/*
1) Реализовать бинарные max, min
2) Реализовать reduce1
3) Реализовать maximum, minimum на базе max, min, reduce1
*/
"use strict";

let xs = [1, 2, 5, 0, -20, 100, 150, 3];

console.log(maximum(xs)); // 150
console.log(minimum(xs)); // -20

function maximum(xs) {
  return reduce1(max, xs);
}

function minimum(xs) {
  return reduce1(min, xs);
}

function max(x, y) {
  return x > y ? x : y;
}

function min(x, y) {
  return x < y ? x : y;
}

function reduce1(fn, xs) {
  let z;
  if (Array.isArray(xs) && xs.length) {
    let _xs;
    [z, ..._xs] = xs;
    for (let x of _xs) {
      z = fn(z, x);
    }
  } else {
    throw Error("array can't be empty");
  }

  return z;
}
