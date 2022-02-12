pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OpenStandardToken is ERC20 {
  constructor(uint256 initialSupply) ERC20("Open Standard", "OPEN") {
    _mint(msg.sender, initialSupply);
  }
}