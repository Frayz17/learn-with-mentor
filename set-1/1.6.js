function uid(alphabet, n) {
  let uid = "";
  for (let i = 0; i < n; i++) {
    uid += alphabet[pickRandom(alphabet.length)];
  }

  return uid;
}

function pickRandom(sequence) {
  return Math.floor(Math.random() * sequence);
}

uid("ab", 1); // One of: "a", "b"
uid("ab", 2); // One of: "aa", "ab", "ba", "bb"
uid("ab", 3); // One of: "aaa", "aab", "aba" ...

uid("abc", 1); // One of: "a", "b", "c"
uid("abc", 2); // One of: "aa", "ab", "ac", "ba", "bb", "bc", "ca", "cb", "cc"
console.log(uid("acb", 3)); // One of: "aaa", "aab", "aac" ...
