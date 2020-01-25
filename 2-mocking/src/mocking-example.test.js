const takeABet = require("./mocking-example");
const coinFlipper = require("./utils/coinFlipper");

test("when user wins a bet, then takeABet will return true", () => {
  // arrange (monkey patching)
  const flipACoinOriginal = coinFlipper.flipACoin;
  coinFlipper.flipACoin = () => "heads";
  // act
  const result = takeABet("1", "heads", 100);
  // assert
  expect(result).toBe(true);
  //clean-up
  coinFlipper.flipACoin = flipACoinOriginal;
});

test("when user looses a bet, then takeABet will return false", () => {
  // arrange (monkey patching)
  const flipACoinOriginal = coinFlipper.flipACoin;
  coinFlipper.flipACoin = () => "tails";
  // act
  const result = takeABet("1", "heads", 100);
  // assert
  expect(result).toBe(false);
  //clean-up
  coinFlipper.flipACoin = flipACoinOriginal;
});
