function deepMerge(o1, o2) {
  const mergeObj = { ...o1 };

  Object.keys(o2).forEach(key => {
    if (isObject(o2[key])) {
      // key doesn't exist in o1
      if (!(key in o1)) {
        Object.assign(mergeObj, { [key]: o2[key] });
        // key exist in o1 but type is not an object - replace that value with an object
      } else if (!isObject(mergeObj[key])) {
        Object.assign(mergeObj, { [key]: o2[key] });
      } else {
        // key exist in o1 - call deepMerge again
        mergeObj[key] = deepMerge(o1[key], o2[key]);
      }

      // key from o2 is not an object
    } else {
      Object.assign(mergeObj, { [key]: o2[key] });
    }
  });

  return mergeObj;
}

function isObject(item) {
  return typeof item === "object" && item !== null;
}

let o1 = { x: { y: "x.y" } };
let o2 = { x: { z: "x.z" } };

console.log(deepMerge(o1, o2)); // {x: {y: "x.y", z: "x.z"}}
console.log(deepMerge(o2, o1)); // {x: {z: "x.z", y: "x.y"}}

// for comparison
// console.log(merge(o1, o2)); // {x: {z: "x.z"}} -- o2 in this case
// console.log(merge(o2, o1)); // {x: {y: "x.y"}} -- o1 in this case
