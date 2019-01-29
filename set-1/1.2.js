function deepMerge(o1, o2) {
  let mergeObj = { ...o1 };

  Object.keys(o2).forEach(key => {
    if (isObject(o2[key])) {
      // key doesn't exist in o1 or target key isn't obj
      if (!(key in o1) || !isObject(mergeObj[key])) {
        mergeObj = merge(mergeObj, { [key]: o2[key] });
        // key exist in o1 but type is not an object - replace that value with an object
      } else {
        // key exist in o1 - call deepMerge again
        mergeObj[key] = deepMerge(o1[key], o2[key]);
      }
      // key from o2 is not an object
    } else {
      mergeObj = merge(mergeObj, { [key]: o2[key] });
    }
  });

  return mergeObj;
}

// I don't like this implementation for this case because a new object is created every time we call the merge function

function merge(o1, o2) {
  return Object.assign({}, o1, o2);
}

function isObject(item) {
  return typeof item === "object" && item !== null;
}


console.log(merge);

let o1 = { x: { y: "x.y" }, yy: 5 };
let o2 = { x: { z: "x.z" } };

console.log(deepMerge(o1, o2)); // {x: {y: "x.y", z: "x.z"}}
console.log(deepMerge(o2, o1)); // {x: {z: "x.z", y: "x.y"}}

// for comparison
// console.log(merge(o1, o2)); // {x: {z: "x.z"}} -- o2 in this case
// console.log(merge(o2, o1)); // {x: {y: "x.y"}} -- o1 in this case
