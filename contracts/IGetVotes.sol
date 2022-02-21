pragma solidity ^0.8.0;

interface IGetVotes {
  function getPriorVotes(address account, uint blockNumber) external view returns (uint96);
}
