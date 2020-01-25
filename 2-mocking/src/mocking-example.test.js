const takeABet = require("./mocking-example");
const coinFlipper = require("./utils/coinFlipper");
const service = require("./utils/walletService");

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

test("when user wins a bet, then takeABet will call createTransaction with double the bet amount", () => {
  // arrange (monkey patching)
  const flipACoinOriginal = coinFlipper.flipACoin;
  coinFlipper.flipACoin = () => "heads";
  const createTransactionOriginal = service.createTransaction;
  service.createTransaction = jest.fn();
  // act
  takeABet("1", "heads", 100);
  // assert
  expect(service.createTransaction).toBeCalledTimes(1);
  expect(service.createTransaction).toBeCalledWith("1", 200);
  //clean-up
  coinFlipper.flipACoin = flipACoinOriginal;
  service.createTransaction = createTransactionOriginal;
});

test("when user looses a bet, then takeABet will call createTransaction with negative value of bet amount", () => {
  // arrange
  jest.spyOn(coinFlipper, "flipACoin");
  jest.spyOn(service, "createTransaction");
  coinFlipper.flipACoin.mockImplementation(() => "tails");
  // act
  takeABet("1", "heads", 100);
  // assert
  expect(service.createTransaction).toBeCalledTimes(1);
  expect(service.createTransaction).toBeCalledWith("1", -100);
  //clean-up
  coinFlipper.flipACoin.mockRestore();
  service.createTransaction.mockRestore();
});
