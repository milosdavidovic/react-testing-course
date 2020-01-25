const coinFlipper = require("./utils/coinFlipper");
const sevice = require("./utils/walletService");

function takeABet(userId, predictedResult, betAmount) {
  const result = coinFlipper.flipACoin();
  const hasWon = result === predictedResult;

  if (hasWon) {
    sevice.createTransaction(userId, 2 * betAmount);
  }
  sevice.createTransaction(userId, betAmount);
  return hasWon;
}

module.exports = takeABet;
