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

let str1 =
  "Worn with pain, and weak from the prolonged hardships which I had undergone, I was removed, with a great train of wounded sufferers, to the base hospital at Peshawar. Here I rallied, and had already improved so far as to be able to walk about the wards, and even to bask a little upon the veranda, when I was struck down by enteric fever, that curse of our Indian possessions. For months my life was despaired of, and when at last I came to myself and became convalescent, I was so weak and emaciated that a medical board determined that not a day should be lost in sending me back to England. I was despatched, accordingly, in the troopship Orontes, and landed a month later on Portsmouth jetty, with my health irretrievably ruined, but with permission from a paternal government to spend the next nine months in attempting to improve it.";
str1 = str1.toLowerCase();

console.log(encrypt(str1, 20)); // "abz"
console.log(decrypt(encrypt("foobar")) == "foobar"); // true

function shiftValueInRangeRight(value, offset) {
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
}

function shiftValueInRangeLeft(value, offset) {
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
