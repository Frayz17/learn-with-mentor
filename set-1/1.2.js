function deepMerge(o1, o2) {
  let obj = { ...o1 };
  let keysO2 = Object.keys(o2);
  let initAcc = keysO2[0];

  obj = keysO2.slice(1).reduce((acc, c) => {
    if (isObject(o2[acc])) {
      console.log("hekku");
      return deepMerge(obj[acc], o2[acc]);
    } else {
      console.log("hekkghfgju");
      return merge(obj);
    }
  }, initAcc);

  return obj;
}

let o1 = { x: { y: "x.y" }, y: 5 };
let o2 = { x: { z: "x.z" }, y: 6 };

let mergedObjexts = deepMerge(o1, o2);
console.log(deepMerge(o1, o2)); // {x: {y: "x.y", z: "x.z"}}
// console.log(deepMerge(o2, o1)); // {x: {z: "x.z", y: "x.y"}}

function isObject(item) {
  return typeof item === "object" && item !== null;
}

function merge(o1, o2) {
  return Object.assign({}, o1, o2);
}

// function MaxValueFromObj(obj) {
//   let keys = Object.keys(obj);
//   if (!keys.length) throw Error("object can't be empty");
//   let max = keys[0];

//   return keys.slice(1).reduce((m, k) => {
//     return m > obj[k] ? m : obj[k];
//   }, max);
// }
