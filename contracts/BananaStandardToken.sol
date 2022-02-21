pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./IGetVotes.sol";

contract BananaStandardToken is ERC20, IGetVotes {
  constructor(uint256 initialSupply) ERC20("Banana Standard", "BANANA") {
    _mint(msg.sender, initialSupply);
  }

  function getPriorVotes(address account, uint blockNumber) external pure returns (uint96) {
    return 999999;
  }
}