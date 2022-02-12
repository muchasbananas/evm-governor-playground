pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BananaStandardToken is ERC20 {
  constructor(uint256 initialSupply) ERC20("Banana Standard", "BANANA") {
    _mint(msg.sender, initialSupply);
  }
}