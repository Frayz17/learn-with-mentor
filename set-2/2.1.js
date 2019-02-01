function encrypt(str, offset) {
  let arr = str.split("");
  arr = arr.map(k => shiftValueInRangePlus(k, offset));

  str = arr.join('');

  return str;
}

function decrypt(str, offset) {
  let arr = str.split("");
  arr = arr.map(k => shiftValueInRangeMinus(k, offset));

  str = arr.join('');

  return str;
}

console.log(encrypt("abz", 3));
console.log(decrypt("dec", 3)); // "abz"
// console.log(decrypt(encrypt("foobar")) == "foobar");

// encrypt("abz", 3); // "dec"
// decrypt("dec", 3); // "abz"
// decrypt(encrypt("foobar")) == "foobar"; // true

function shiftValueInRangePlus(value, offset) {
  value = value.charCodeAt();
  const to = 122;
  const from = 97;

  if (value >= from && value <= to) {
    let shiftedValue = value + offset > to ? (value + offset - to + from - 1) : (value + offset);
    shiftedValue = String.fromCharCode(shiftedValue);
    return shiftedValue;

  } else return "value not in range";
}

function shiftValueInRangeMinus(value, offset) {
  value = value.charCodeAt();
  const to = 122;
  const from = 97;

  if (value >= from && value <= to) {
    value = value - offset < from ? (value - offset - from  + to + 1) : (value - offset);
    value = String.fromCharCode(value);
    return value;

  } else return "value not in range";
}
