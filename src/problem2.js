/*
  Project Euler Problem 2
  Even Fibonacci numbers
*/

function sumEvenFibs(limit) {
  return getEvenFibs(limit).reduce(function(a, b) { return a + b; });
}

function getEvenFibs(limit) {
  var fibs = [1, 1],
      evenFibs = [],
      i = fibs.length,
      currentFib = fibs[i - 1] + fibs[i - 2];

  while (currentFib < limit) {

    fibs.push(currentFib);

    if (currentFib % 2 === 0) {
      evenFibs.push(currentFib);
    }

    i = fibs.length;
    currentFib = fibs[i - 1] + fibs[i - 2];

  }

  return evenFibs;
}