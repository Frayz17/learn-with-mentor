function deepMerge(o1, o2) {
  let mergeObj = { ...o1 };

  Object.keys(o2).forEach(key => {
    if (isObject(o2[key])) {
      // key doesn't exist in o1 or target key isn't obj
      if (!(key in o1) || !isObject(mergeObj[key])) {
        merge(mergeObj, { [key]: o2[key] });
      } else {
        // key exist in o1 - call deepMerge again
        mergeObj[key] = deepMerge(o1[key], o2[key]);
      }
      // key from o2 is not an object
    } else {
      merge(mergeObj, { [key]: o2[key] });
    }
  });

  return mergeObj;
}

// В данном контексте создавать новый объект внутри merge избыточно,
// поэтому я изменил функцию
function merge(o1, o2) {
  return Object.assign(o1, o2);
}

function isObject(item) {
  return typeof item === "object" && item !== null;
}

let o1 = { x: { y: "x.y" } };
let o2 = { x: { z: "x.z" } };

console.log(deepMerge(o1, o2)); // {x: {y: "x.y", z: "x.z"}}
console.log(deepMerge(o2, o1)); // {x: {z: "x.z", y: "x.y"}}
