describe("Problem 4 solution", function () {
  it("largest palindrome made from product of two 2-digit numbers is 9009", function () {
    expect(findLargestPalindromeProduct(2)).toEqual(9009);
  });

  it("getMaxMultiplier returns a 999 when given 3", function () {
    expect(getMaxMultiplier(3)).toEqual(999);
  });

  it("isPalindrome returns true when number is a palindrome", function() {
    expect(isPalindrome(9009)).toBe(true);
  });

  it("isPalindrome returns false when number is not a palindrome", function() {
    expect(isPalindrome(9018)).toBe(false);
  });
});