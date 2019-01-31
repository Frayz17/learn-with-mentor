function deepMerge(o1, o2) {
    let mergeObj = { ...o1 };
      
    Object.keys(o2).map(key => {
      if (isObject(o2[key]) && isObject(o1[key])) {   
        return mergeObj[key] = deepMerge(o1[key], o2[key]);
      } else {
          return mergeObj = merge(mergeObj, { [key]: o2[key] });
      }
    });
  
    return mergeObj;
  }
  
  let o1 = { x: { y: "x.y" } };
  let o2 = { x: { z: "x.z" } };
  
  console.log(deepMerge(o1, o2)); // {x: {y: "x.y", z: "x.z"}}
  console.log(deepMerge(o2, o1)); // {x: {z: "x.z", y: "x.y"}}
  
  function merge(o1, o2) {
    return Object.assign({}, o1, o2);
  }
  
  function isObject(item) {
    return typeof item === "object" && item !== null;
  }