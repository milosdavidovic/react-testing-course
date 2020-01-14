function multiply(a, b) {
  return a * b;
}

function square(a) {
  return a * a;
}

// In another file...
// import {multiply, square} from "./math"

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

let expectedResult = 16;
let actualResult = square(4);
expect(actualResult).toBe(expectedResult);

expectedResult = 8;
actualResult = multiply(2, 4);
expect(actualResult).toBe(expectedResult);

console.log("Tests passed!");
