/*
  Project Euler Problem 4
  Largest palindrome product
 */

function findLargestPalindromeProduct(numDigits) {
  var maxNum = getMaxMultiplier(numDigits);
  var largestPalindrome = 0;

  for (var i = maxNum; i >= 1; i--) {
    for (var j = 1; j <= maxNum; j++) {
      var product = i * j;
      if (isPalindrome(product) && product > largestPalindrome){
        largestPalindrome = product;
      }
    }
  }

  return largestPalindrome;
}

function getMaxMultiplier(numDigits) {
  var maxMultiplier = "";

  for (var i = 1; i <= numDigits; i++) {
    maxMultiplier = maxMultiplier + "9";
  }

  return Number(maxMultiplier);
}

function isPalindrome(num) {
  var tempString = num.toString();
  tempString = tempString.split("").reverse().join("");
  var reversedNum = Number(tempString);

  if (num === reversedNum){
    return true;
  } else {
    return false;
  }
}