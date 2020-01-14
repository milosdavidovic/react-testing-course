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

global.test = test;
global.expect = expect;
