// Task 4.1
// Write a function coinsToAmount to convert US coins to their money amount. This one will be easy.

// Penny: 1 cent
// Nickel: 5 cents
// Dime: 10 cents
// Quarter: 25 cents
// let rates = [0.25, 0.1, 0.05, 0.01]

function coinsToAmount(coins) {
  const quarter = coins[0] * 25;
  const dime = coins[1] * 10;
  const nickel = coins[2] * 5;
  const penny = coins[3];

  return (quarter + dime + nickel + penny) / 100;
}

console.log(coinsToAmount([0, 0, 0, 0])) // 0
console.log(coinsToAmount([0, 0, 0, 1])) // 0.01
console.log(coinsToAmount([0, 0, 1, 1])) // 0.06
console.log(coinsToAmount([0, 1, 1, 1])) // 0.16
console.log(coinsToAmount([1, 1, 1, 1])) // 0.41
