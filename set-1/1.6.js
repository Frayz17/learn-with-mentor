function uid(alphabet, n) {
  let uid = "";
  for (let i = 0; i < n; i++) {
    uid += alphabet[randomInteger(alphabet.length)];
  }

  return uid;
}

function randomInteger(range) {
  return Math.floor(Math.random() * range);
}

uid("ab", 1); // One of: "a", "b"
uid("ab", 2); // One of: "aa", "ab", "ba", "bb"
uid("ab", 3); // One of: "aaa", "aab", "aba" ...

uid("abc", 1); // One of: "a", "b", "c"
uid("abc", 2); // One of: "aa", "ab", "ac", "ba", "bb", "bc", "ca", "cb", "cc"
console.log(uid("ac", 3)); // One of: "aaa", "aab", "aac" ...

// const arr = [];
// for (let i = 0; i < 25; i++) {
//   arr.push(randomInteger(2));
// }
// console.log(arr);

// since:
// Math.floor(0.999) = 0  and Math.floor(1.999) = 1
// randomInteger() has correct output
