"use strict";

module.exports = {
  maximum: function maximum(xs) {
    return reduce1(max, xs);
  },

  minimum: function minimum(xs) {
    return reduce1(min, xs);
  },

  max: function max(x, y) {
    return x > y ? x : y;
  },

  min: function min(x, y) {
    return x < y ? x : y;
  },

  reduce: function reduce(fn, xs) {
    let z;
    if (Array.isArray(xs) && xs.length) {
      let _xs;
      [z, ..._xs] = xs;
      for (let x of _xs) {
        z = fn(z, x);
      }
    } else {
      throw Error("array can't be empty");
    }

    return z;
  }
};
