const Migrations = artifacts.require('Migrations');
const BananaGovernor = artifacts.require('BananaGovernor');
const BananaStandardToken = artifacts.require('BananaStandardToken');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(BananaGovernor);
  deployer.deploy(BananaStandardToken, 21000000);
};
