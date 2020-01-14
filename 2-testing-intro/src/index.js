function multiply(a, b) {
  return a * b;
}

function square(a) {
  return a * a;
}

// In another file...
// import {multiply, square} from "./math"

function test(title, callback) {
  try {
    callback();
    console.log(`[PASSED] ${title}`);
  } catch (error) {
    console.error(`[FAILED] ${title}`);
    console.error(error.message);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (expected != actual) {
        throw new Error(`${expected} is not equal to ${actual}`);
      }
    },
    toBeGreaterThen(value) {},
    toBeDefined() {}
  };
}
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
