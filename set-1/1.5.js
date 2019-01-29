function ifElse(cond, ifTrue, ifFalse) {
  if (cond) return ifTrue;
  return ifFalse;
}

console.log(ifElse(true, 1, 2));

ifElse(true, 1, 2); // 1
ifElse(false, 1, 2); // 2
