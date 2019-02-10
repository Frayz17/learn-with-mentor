"use strict";

module.exports = {
  encryptRight: function encryptRight(str, offset = 0) {
    offset = Math.abs(offset);

    if (offset !== 0) {
      let arr = str.split("");
      arr = arr.map(k => this.shiftValueInRangeRight(k, offset));

      str = arr.join("");

      return str;
    } else return str;
  },

  decryptLeft: function decryptLeft(str, offset = 0) {
    offset = Math.abs(offset);

    if (offset !== 0) {
      let arr = str.split("");
      arr = arr.map(k => this.shiftValueInRangeLeft(k, offset));

      str = arr.join("");

      return str;
    } else return str;
  },

  shiftValueInRangeRight: function shiftValueInRangeRight(value, offset) {
    value = value.charCodeAt();
    const valueCodeBase = 97;
    const alphabetLettersAmount = 26;

    let cipherValue = value;
    if (value !== 32 && value !== 46 && value !== 44) {
      cipherValue =
        ((value - valueCodeBase + offset) % alphabetLettersAmount) +
        valueCodeBase;
    }

    cipherValue = String.fromCharCode(cipherValue);
    return cipherValue;
  },

  shiftValueInRangeLeft: function shiftValueInRangeLeft(value, offset) {
    value = value.charCodeAt();
    const valueCodeBase = 97;
    const alphabetLettersAmount = 26;

    let cipherValue = value;
    if (value !== 32 && value !== 46 && value !== 44) {
      cipherValue =
        ((value - valueCodeBase - offset + alphabetLettersAmount) %
          alphabetLettersAmount) +
        valueCodeBase;
    }
    cipherValue = String.fromCharCode(cipherValue);
    return cipherValue;
  }
};
