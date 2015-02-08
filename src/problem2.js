/*
  Project Euler Problem 2
  Even Fibonacci numbers
*/

function sumEvenFibs(limit) {
  return getEvenFibs(limit).reduce(function(a, b) { return a + b; });
}

function getEvenFibs(limit) {
  var evenFibs = [];
  var fibs = getFibs(limit);

  for (var i = 1, x = fibs.length; i < x; i++) {
    if (fibs[i] % 2 === 0){
      evenFibs.push(fibs[i]);
    }
  }

  return evenFibs;
}

function getFibs(limit) {
  var fibs = [1, 1];
  var i = fibs.length;
  var currentFib = fibs[i - 1] + fibs[i - 2];

  while (currentFib < limit) {

    fibs.push(currentFib);
    i = fibs.length;
    currentFib = fibs[i - 1] + fibs[i - 2];

  }

  return fibs;
}