const BananaGovernorContract = artifacts.require("BananaGovernor");
const BananaStandardTokenContract = artifacts.require("BananaStandardToken");

module.exports = async function (deployer: Truffle.Deployer) {
  await deployer.deploy(BananaStandardTokenContract, 21000000);
  await deployer.deploy(
    BananaGovernorContract,
    BananaStandardTokenContract.address
  );
};
