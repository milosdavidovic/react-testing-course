const coinFlipper = require("./utils/coinFlipper");
const createTransaction = require("./utils/walletService");

function takeABet(userId, predictedResult, betAmount) {
  const result = coinFlipper.flipACoin();
  const hasWon = result === predictedResult;

  if (hasWon) {
    createTransaction(userId, 2 * betAmount);
  }
  createTransaction(userId, betAmount);
  return hasWon;
}

module.exports = takeABet;
