/*
1) Реализовать бинарные max, min
2) Реализовать reduce1
3) Реализовать maximum, minimum на базе max, min, reduce1
*/

// function map1(fn, xs) {
//   let ys = [];
//   for (let x of xs) {
//     ys = [...ys, fn(x)];
//   }
//   return ys;
// }

// function double(x) {
//   return x * x;
// }

// x = [1, 2, 3];
// // console.log(map1(double, x));

function add(a, b) {
  return a + b;
}

x = [1, 2, 3];
console.log(reduce1(add, 0, x));

function reduceOneArg(fn, xs) {
  let z;
  for (let i = 0; i < xs.length - 1; i++) {
    z;
  }
}
