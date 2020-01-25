const takeABet = require("./mocking-example");
const coinFlipper = require("./utils/coinFlipper");

test("this is one flaky test", () => {
  const result = takeABet("1", "heads", 100);

  expect(result).toBe(true);
});
