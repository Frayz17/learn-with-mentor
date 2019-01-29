function range(from, to) {
  if (to >= from) {
    return Array(to - from)
      .fill()
      .map((element, index) => index);
  } else return [];
}

range(0, 0); // []
range(0, 1); // [0]
range(0, 2); // [0, 1]
console.log(range(0, 3)); // [0, 1, 2]

range(1, 0); // [] -- edge case, arguments make no sense
range(1, 1); // []
range(1, 2); // [1]
range(1, 3); // [1, 2]
