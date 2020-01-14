function multiply(a, b) {
  return a * b;
}

function square(a) {
  return a * a;
}

// In another file...
// import {multiply, square} from "./math"

let expectedResult = 16;
let actualResult = square(4);
if (expectedResult != actualResult) {
  throw new Error(`${expectedResult} is not equal to ${actualResult}`);
}

expectedResult = 8;
actualResult = multiply(2, 4);
if (expectedResult != actualResult) {
  throw new Error(`${expectedResult} is not equal to ${actualResult}`);
}

console.log("Tests passed!");
