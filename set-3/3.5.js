let str =
  "NkvsxkbUryvsxKvodrskbwsocgyxkpvoodsxqfsmdybikdkdobbslvomycd^rooxowiZkbcroxnscewwyxondrofsyvoxdOfobcdybwgrsmrxygcgoozcdrogybvngsdrnocdbemdsyxkxnsxsdczkccsxqkgkuoxcdroyxmozokmopevkxncelcobfsoxdzkbcrwoxdydrorybbybypdrosbwsvvoxxskvyxqoxcvkfowoxdlirewkxcarsvoyxknoczobkdopvsqrddygkbxrscpkwsviypdrodrbokdUkvknsx]dybwlvocconwecdmywodyqbszcgsdrdropkmddrkddroxogviusxnvonkxqobypdrozkbcrwoxwkilogryvvitecdspson";
str = str.toLowerCase();

function letterAnalyzer(str) {
  letersTable = {};

  for (i = 97; i <= 122; i++) {
    let letter = String.fromCharCode(i);
    var regexLetter = new RegExp(letter, "g");

    // if string has letter find all occurrences and add to leters table
    if (regexLetter.test(str)) {
      letersTable[letter] = str.match(regexLetter).length;
    }
  }

  return letersTable;
}

let lettersTable = letterAnalyzer(str);

function MostFreqLetterFromString(lettersTable) {
  const keys = Object.keys(lettersTable);
  const values = Object.values(lettersTable);
  if (!keys.length) throw Error("object can't be empty");
  // let max = keys[0];

  // let maxValue = keys.slice(1).reduce((m, k) => {
  //   return m > obj[k] ? m : obj[k];
  // }, max);

  let maxValue = reduce1(max, values);

  let MostFrecLetter = {};
  for (let key of keys) {
    if (lettersTable[key] === maxValue) {
      MostFrecLetter[key] = maxValue;
    }
  }

  return MostFrecLetter;
}

// char
function decoder(objLetter, str) {
  const eCode = 101;
  let keys = Object.keys(objLetter);
  let charCodes = keys.map(key => key.charCodeAt());
  let encryptKey = Math.abs(charCodes[0] - eCode);

  str =
    charCodes[0] > eCode
      ? decryptLeft(str, encryptKey)
      : encryptRight(str, encryptKey);
  return str;
}

let MostFrecLetter = MostFreqLetterFromString(lettersTable);
console.log(decoder(MostFrecLetter, str));
console.log(MostFreqLetterFromString(lettersTable));

function max(x, y) {
  return x > y ? x : y;
}

function reduce1(fn, xs) {
  let z;
  if (Array.isArray(xs) && xs.length) {
    [z, ..._xs] = xs;
    for (x of _xs) {
      z = fn(z, x);
    }
  } else {
    throw Error("array can't be empty");
  }

  return z;
}

function encryptRight(str, offset = 0) {
  offset = Math.abs(offset);

  if (offset !== 0) {
    let arr = str.split("");
    arr = arr.map(k => shiftValueInRangeRight(k, offset));

    str = arr.join("");

    return str;
  } else return str;
}

function decryptLeft(str, offset = 0) {
  offset = Math.abs(offset);

  if (offset !== 0) {
    let arr = str.split("");
    arr = arr.map(k => shiftValueInRangeLeft(k, offset));

    str = arr.join("");

    return str;
  } else return str;
}

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
