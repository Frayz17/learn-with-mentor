// Task 4.2
// Write a function amountToCoins to dispense an amount of money with coins. This one will be hard.
// There are many cases when such conversions are required: exchange machines, cash machines (ATMs), etc.
// They all take a number (e.g. withdraw amount) and convert it to some multi-unit representation (different
// numbers of different bank notes).

// The algorithm should dispense largest denominations first, then second but largetst and so on.
// In this particular coin distribution, it will result in the smallest number of coins being dispensed.

let rates = [0.25, 0.1, 0.05, 0.01]

function amountToCoins(amount) {
  amount *= 100;
  coins = [0, 0, 0, 0];

  const quarter = Math.floor(amount / 25);
  if (amount % 25 === 0) {
    coins[0] = quarter;
    return coins;
  }
  amount = amount % 25;

  const dime = Math.floor(amount / 10);
  if (amount % 10 === 0) {
    coins[1] = dime;
    return coins;
  }
  amount = amount % 10;

  const nickel = Math.floor(amount / 5);
  if (amount % 5 === 0) {
    coins[2] = nickel;
    return coins;
  }

  const penny = amount % 5;
  coins[3] = penny;

  return coins;
}

console.log(amountToCoins(0))    // [0, 0, 0, 0]
console.log(amountToCoins(1))    // [4, 0, 0, 0]
console.log(amountToCoins(2))    // [8, 0, 0, 0]
console.log(amountToCoins(0.01)) // [0, 0, 0, 1]
console.log(amountToCoins(0.20)) // [0, 2, 0, 0]
console.log(amountToCoins(0.25)) // [1, 0, 0, 0]