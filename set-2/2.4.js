function leapyear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

console.log(leapyear(2020)); // true
console.log(leapyear(2019)); // false
