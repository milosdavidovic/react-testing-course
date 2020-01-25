const takeABet = require("./mocking-example");
const coinFlipper = require("./utils/coinFlipper");

test("when user wins a bet, then takeABet will return true", () => {
  // arrange (monkey patching)
  coinFlipper.flipACoin = () => "heads";
  // act
  const result = takeABet("1", "heads", 100);
  // assert
  expect(result).toBe(true);
});
