const BananaStandardContract = artifacts.require("BananaStandard");

module.exports = async function (deployer: Truffle.Deployer) {
  await deployer.deploy(BananaStandardContract, BananaGovernorContract.address);
};
