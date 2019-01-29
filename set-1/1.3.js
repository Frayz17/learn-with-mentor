function range(from, to) {
  const rangeArr = [];

  for (let i = from; i < to; i++) {
    rangeArr.push(i);
  }

  return rangeArr;
}

range(0, 0); // []
range(0, 1); // [0]
range(0, 2); // [0, 1]
range(0, 3); // [0, 1, 2]

range(1, 0); // [] -- edge case, arguments make no sense
range(1, 1); // []
range(1, 2); // [1]
range(1, 3); // [1, 2]
