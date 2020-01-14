function multiply(a, b) {
  return a * b;
}

function square(a) {
  return a * a;
}

// In another file...
// import {multiply, square} from "./math"

// It is common to write unit tests using the AAA pattern

test("square squares number", () => {
  // arrange
  const expectedResult = 17;
  // act
  const actualResult = square(4);
  // assert
  expect(actualResult).toBe(expectedResult);
});

test("multiply multiplies numbers", () => {
  const expectedResult = 8;
  const actualResult = multiply(2, 4);
  expect(actualResult).toBe(expectedResult);
});
