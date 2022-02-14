const MigrationsContract = artifacts.require("Migrations");
const BananaGovernorContract = artifacts.require("BananaGovernor");
const BananaStandardTokenContract = artifacts.require("BananaStandardToken");

module.exports = function (deployer: Truffle.Deployer) {
  deployer.deploy(MigrationsContract);
  deployer.deploy(BananaGovernorContract);
  deployer.deploy(BananaStandardTokenContract, 21000000);
};
