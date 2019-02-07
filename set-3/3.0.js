/*
1) Реализовать бинарные max, min
2) Реализовать reduce1
3) Реализовать maximum, minimum на базе max, min, reduce1
*/

let xs = [1, 2, 5, 0, -20, 100, 150, 3];

console.log(maximum(xs));
console.log(minimum(xs));

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
    [z, ..._xs] = xs;
    for (x of _xs) {
      z = fn(z, x);
    }
  } else {
    z = "array must have at least one element";
  }

  return z;
}