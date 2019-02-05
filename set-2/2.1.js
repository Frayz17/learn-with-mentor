function encrypt(str, offset = 0) {
  offset = Math.abs(offset);

  if (offset !== 0) {
    let arr = str.split("");
    arr = arr.map(k => shiftValueInRangeRight(k, offset));

    str = arr.join("");

    return str;
  } else return str;
}

function decrypt(str, offset = 0) {
  offset = Math.abs(offset);

  if (offset !== 0) {
    let arr = str.split("");
    arr = arr.map(k => shiftValueInRangeLeft(k, offset));

    str = arr.join("");

    return str;
  } else return str;
}

console.log(encrypt("abz", 3)); // "dec"
console.log(decrypt("dec", 3)); // "abz"
console.log(decrypt(encrypt("foobar")) == "foobar"); // true

function shiftValueInRangeRight(value, offset) {
  value = value.charCodeAt();
  const valueCodeBase = 97;
  const alphabetLettersAmount = 26;

  let cipherValue =
    ((value - valueCodeBase + offset) % alphabetLettersAmount) + valueCodeBase;

  cipherValue = String.fromCharCode(cipherValue);
  return cipherValue;
}

function shiftValueInRangeLeft(value, offset) {
  value = value.charCodeAt();
  const valueCodeBase = 97;
  const alphabetLettersAmount = 26;

  let cipherValue =
    ((value - valueCodeBase - offset + alphabetLettersAmount) %
      alphabetLettersAmount) +
    valueCodeBase;

  cipherValue = String.fromCharCode(cipherValue);
  return cipherValue;
}
