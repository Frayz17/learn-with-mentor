function encrypt(str, offset) {
  let arr = str.split("");
  arr.map(k => shiftValueInRange(k, offset));

  return arr;
}

function decrypt(str, offset) {}

console.log(encrypt("abc", 4));

// encrypt("abz", 3); // "dec"
// decrypt("dec", 3); // "abz"
// decrypt(encrypt("foobar")) == "foobar"; // true

// [97 - 122]

function shiftValueInRange(value, offset) {
  value = value.charCodeAt();
  const to = 122;
  const from = 97;

  console.log(encrypt(value, offset));

  if (value >= from && value <= to) {
    return value + offset > to ? value + offset - to + from : value + offset;
  } else return "value not in range";
}
