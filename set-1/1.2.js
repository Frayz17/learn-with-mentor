function deepMerge(o1, o2) {
  let obj = { o1 };

  obj = Object.keys(o2).reduce((acc, c) => {
    if (isObject(o2[c])) {
      return deepMerge(obj[c], o2[c]);
      console.log("hekku");
    } else {
      return (acc = o2[c]);
      console.log("hekkghfgju");
    }
  }, {});

  return obj;
}

let o1 = { x: { y: "x.y" }, y: 5 };
let o2 = { x: { z: "x.z" }, y: 6 };

console.log(deepMerge(o1, o2)); // {x: {y: "x.y", z: "x.z"}}
// console.log(deepMerge(o2, o1)); // {x: {z: "x.z", y: "x.y"}}

function isObject(item) {
  return typeof item === "object" && item !== null;
}
