pragma solidity ^0.8.0;

contract BananaStandard {
  string public document;
  address public governor;

  constructor(address _governor) {
    governor = _governor;
  }

  function setDocument(string memory _document) public {
    require(msg.sender == governor);
    document = _document;
  }

  function setGovernor(address _address) public {
    require(msg.sender == governor);
    governor = _address;
  }
}