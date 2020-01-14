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

function testSquare() {
  let expectedResult = 17;
  let actualResult = square(4);
  expect(actualResult).toBe(expectedResult);
}

test("square squares number", testSquare);

function testMultiply() {
  expectedResult = 8;
  actualResult = multiply(2, 4);
  expect(actualResult).toBe(expectedResult);
}

test("multiply multiplies numbers", testMultiply);
