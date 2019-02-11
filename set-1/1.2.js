"use strict";

let o1 = { x: { y: "x.y" } };
let o2 = { x: { z: "x.z" } };

// let o1 = { x: 1, y: 2, z: 3 };
// let o2 = { p: 10, t: 20, n: 30 };

let mergedObjexts = deepMerge(o1, o2);
console.log(mergedObjexts);

function isPlainObj(o) {
  return Boolean(
    o &&
      o.constructor &&
      o.constructor.prototype &&
      o.constructor.prototype.hasOwnProperty("isPrototypeOf")
  );
}

function merge(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

function deepMerge(obj1, obj2) {
  return Object.keys(obj2).reduce((z, k) => {
    let v2 = obj2[k];
    return isPlainObj(obj1[k]) && isPlainObj(obj1[k])
      ? merge(obj1, { [k]: deepMerge(obj1[k], obj2[k]) })
      : merge(obj1, { [k]: v2 });
  }, obj1);
}
