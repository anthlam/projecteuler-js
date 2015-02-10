/*
  Project Euler Problem 5
  Smallest multiple
 */

function smallestDivisibleNum(divisors) {
  var num = 0,
      found = false,
      dividesEvenly = [];

  while (!found) {

    num += 2;

    for (var i = 2; i <= divisors; i++) {
      if (num % i === 0) {
        dividesEvenly.push(i);
      }
    }

    if (dividesEvenly.length + 1 === divisors) {
      found = true;
    }

    dividesEvenly = [];
  }

  return num;
}
