function multiply(a, b) {
  return a * b;
}

function square(a) {
  return a * a;
}

// In another file...
// import {multiply, square} from "./math"

const expectedResult = 16;
const actualResult = square(4);
if (expectedResult != actualResult) {
  throw new Error(`${expectedResult} is not equal to ${actualResult}`);
}

console.log("Tests passed!");
