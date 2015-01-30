/*
  Project Euler Problem 3
  Largest prime factor
*/

function findLargestPrimeFactor(num) {
  var currentFactor = 2;
  var largestPrimeFactor = 1;

  if (num % currentFactor === 0) {
    largestPrimeFactor = currentFactor;
    num = num / currentFactor;

    while (num % currentFactor === 0) {
      num = num / currentFactor;
    }
  }

  currentFactor++;

  while (num > 1) {
    if (num % currentFactor === 0) {
      largestPrimeFactor = currentFactor;
      num = num / currentFactor;

      while (num % currentFactor === 0) {
        num = num / currentFactor;
      }
    }
    currentFactor += 2;
  }

  return largestPrimeFactor;
}