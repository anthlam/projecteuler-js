/*
  Project Euler Problem 1
  Multiples of 3 and 5
*/

function sumMultiplesOfThreeAndFive (upperLimit) {
  return getMultiples(upperLimit).reduce(function(a, b) { return a + b; });
}

function getMultiples(limit) {
  var multiples = [];

  for (var i = 1; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }

  return multiples;
}