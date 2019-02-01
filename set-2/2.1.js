function encrypt(str, offset = 0) {
  if (offset !== 0) {
    let arr = str.split("");
    arr = arr.map(k => shiftValueInRangePlus(k, offset));

    str = arr.join("");

    return str;
  } else {
    return str;
  }
}

function decrypt(str, offset = 0) {
  if (offset !== 0) {
    let arr = str.split("");
    arr = arr.map(k => shiftValueInRangeMinus(k, offset));

    str = arr.join("");

    return str;
  } else {
    return str;
  }
}

console.log(encrypt("abz", 0)); // "dec"
console.log(decrypt("dec", 0)); // "abz"
console.log(decrypt(encrypt("foobar")) == "foobar"); // true

function shiftValueInRangePlus(value, offset) {
  value = value.charCodeAt();
  const to = 122;
  const from = 97;

  if (value >= from && value <= to) {
    let shiftedValue =
      value + offset > to ? value + offset - to + from - 1 : value + offset;
    shiftedValue = String.fromCharCode(shiftedValue);
    return shiftedValue;
  } else return "value not in range";
}

function shiftValueInRangeMinus(value, offset) {
  value = value.charCodeAt();
  const to = 122;
  const from = 97;

  if (value >= from && value <= to) {
    value =
      value - offset < from ? value - offset - from + to + 1 : value - offset;
    value = String.fromCharCode(value);
    return value;
  } else return "value not in range";
}

// function shiftValueInRange(value, offset) {
//   value = value.charCodeAt();
//   const to = 122;
//   const from = 97;

//   if (value >= from && value <= to) {
//     let shiftedValue =
//       value + offset > to ? value + offset - to + from - 1 : value + offset;
//     shiftedValue = String.fromCharCode(shiftedValue);
//     return shiftedValue;
//   } else return "value not in range";
// }
