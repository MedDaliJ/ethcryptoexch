const TokenTwo = artifacts.require("TokenTwo");
const EthSwapTwo = artifacts.require("EthSwapTwo");

module.exports = async function(deployer) {

  // Deploy Token Two
  await deployer.deploy(TokenTwo);
  const tokentwo = await TokenTwo.deployed()

  // Deploy EthSwap Two
  await deployer.deploy(EthSwapTwo, tokentwo.address);
  const ethSwaptwo = await EthSwapTwo.deployed()

  // Transfer all tokens to EthSwap Two (1 million)
  await tokentwo.transfer(ethSwaptwo.address, '1000000000000000000000000')
};
