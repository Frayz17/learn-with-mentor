function deepMerge(o1, o2) {
  let mergeObj = { ...o1 };
  const notUsedVal = 1;

  const reducer = (_, currentValue) => {
    if (isObject(o2[currentValue])) {
      return (mergeObj[currentValue] = deepMerge(
        o1[currentValue],
        o2[currentValue]
      ));
    } else {
      return (mergeObj = merge(mergeObj, { [currentValue]: o2[currentValue] }));
    }
  };

  // let obj = { ...o1 };

  // let objCopy = Object.keys(obj).reduce((acc, curr) => {
  //   {
  //     acc[curr] = o2[curr];
  //   }
  //   return acc;
  // }, {});

  // console.log(objCopy);

  return objCopy;
}

let o1 = { x: { y: "x.y" } };
let o2 = { x: { z: "x.z" } };

console.log(deepMerge(o1, o2)); // {x: {y: "x.y", z: "x.z"}}
// console.log(deepMerge(o2, o1)); // {x: {z: "x.z", y: "x.y"}}

function merge(o1, o2) {
  return Object.assign({}, o1, o2);
}

function isObject(item) {
  return typeof item === "object" && item !== null;
}

/* 
const reducer = (acc, currentValue) => {
  return acc + currentValue;
}

const total = [1, 2, 3, 4, 5].reduce(reducer);

*/
