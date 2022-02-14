import { BananaGovernorInstance } from "../types/truffle-contracts/BananaGovernor";

const BananaGovernor = artifacts.require("BananaGovernor");

contract("BananaStandardToken", (accounts) => {
  it("should fetch quorum", async () => {
    const instance = await BananaGovernor.deployed();
    const blockNumber = 1234;
    const quorum = await instance.quorum(blockNumber);
    assert.equal(quorum.toNumber(), blockNumber);
  });

  it("should propose", async () => {
    const instance = await BananaGovernor.deployed();

    async function executePropose(
      instance: BananaGovernorInstance,
      description: string
    ) {
      const targets = [accounts[0]];
      const values = ["0x00"];
      const calldatas = ["0x00"];
      return instance.propose(targets, values, calldatas, description);
    }

    const firstTransactionResponse = await executePropose(
      instance,
      "Hello world! I am a proposal."
    );
    const firstProposalId = firstTransactionResponse.logs[0].args.proposalId;
    expect(firstTransactionResponse.logs[0].event).equals("ProposalCreated");

    const secondTransactionResponse = await executePropose(
      instance,
      "Hello world! I am NOT a proposal."
    );
    const secondProposalId = secondTransactionResponse.logs[0].args.proposalId;
    expect(secondTransactionResponse.logs[0].event).equals("ProposalCreated");
    expect(firstProposalId).to.not.equal(secondProposalId);

    const firstState = instance.state(firstProposalId);
    const secondState = instance.state(secondProposalId);
    console.log(
      "state:",
      JSON.stringify(firstState, null, 2),
      JSON.stringify(secondState, null, 2)
    );
  });
});
