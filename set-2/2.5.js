function rleEncode(str) {
  let lastLetter, currentCount;
  let output = "";

  for (let i = 0; i < str.length; i++) {
    if (typeof lastLetter === "undefined") {
      lastLetter = str[i];
      currentCount = 1;

      continue;
    }

    if (str[i] !== lastLetter) {
      currentCount === 1
        ? (output += lastLetter)
        : (output += currentCount + lastLetter);
      lastLetter = str[i];
      currentCount = 1;

      continue;
    }

    currentCount++;
  }

  output += currentCount + lastLetter;

  return output;
}

function rleDecode(str) {
  return str.replace(/(\d+)(\w)/g, function(match, number, letter) {
    return new Array(parseInt(number, 10) + 1).join(letter);
  });
}

console.log(rleEncode("aabbbcaa"));
console.log(rleDecode("2a3b1c2a"));
