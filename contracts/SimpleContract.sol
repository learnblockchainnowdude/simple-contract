// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

contract SimpleContract {
  uint public value;

  function setValue(uint _value) external {
    value = _value;
  }
}
