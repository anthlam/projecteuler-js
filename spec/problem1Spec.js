describe("Problem 1 solution", function() {
  it("returns array of multiples of 3 and 5", function() {
    expect(getMultiples(10)).toEqual([3, 5, 6, 9]);
  });

  it("returns 23 for multiples of 3 and 5, less than 10", function() {
    expect(sumMultiplesOfThreeAndFive(10)).toEqual(23);
  });
});