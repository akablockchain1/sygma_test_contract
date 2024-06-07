const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenModule = buildModule("SygmaErc20Module", (m) => {
  const token = m.contract("SygmaErc20");

  return { token };
});

module.exports = TokenModule;
