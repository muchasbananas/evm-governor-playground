const BananaStandardToken = artifacts.require("BananaStandardToken");

contract("BananaStandardToken", (accounts) => {
  it("execute ERC20 tranfer", async function () {
    const bananaStandardToken = await BananaStandardToken.deployed();
    const amount = 100;
    const toAccount = accounts[1];
    const toBalanceInitial = await bananaStandardToken.balanceOf(toAccount);
    await bananaStandardToken.transfer(accounts[1], amount);
    const toBalancePost = await bananaStandardToken.balanceOf(toAccount);
    assert.equal(
      toBalancePost.toNumber(),
      toBalanceInitial.toNumber() + amount
    );
  });
});
