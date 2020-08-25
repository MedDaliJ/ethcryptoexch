pragma solidity ^0.5.0;

import "./TokenTwo.sol";

contract EthSwapTwo {
  string public name = "EthSwapTwo Instant Exchange";
  TokenTwo public tokentwo;
  uint public rate = 10;

  event TokensTwoPurchased(
    address account,
    address tokentwo,
    uint amount,
    uint rate
  );

  event TokensTwoSold(
    address account,
    address tokentwo,
    uint amount,
    uint rate
  );

  constructor(TokenTwo _tokentwo) public {
    tokentwo = _tokentwo;
  }

  function buyTokensTwo() public payable {
    // Calculate the number of tokens to buy
    uint tokentwoAmount = msg.value * rate;

    // Require that EthSwap has enough tokens
    require(tokentwo.balanceOf(address(this)) >= tokentwoAmount);

    // Transfer tokens to the user
    tokentwo.transfer(msg.sender, tokentwoAmount);

    // Emit an event
    emit TokensTwoPurchased(msg.sender, address(tokentwo), tokentwoAmount, rate);
  }

  function sellTokensTwo(uint _amount) public {
    // User can't sell more tokens than they have
    require(tokentwo.balanceOf(msg.sender) >= _amount);

    // Calculate the amount of Ether to redeem
    uint etherAmount = _amount / rate;

    // Require that EthSwap has enough Ether
    require(address(this).balance >= etherAmount);

    // Perform sale
    tokentwo.transferFrom(msg.sender, address(this), _amount);
    msg.sender.transfer(etherAmount);

    // Emit an event
    emit TokensTwoSold(msg.sender, address(tokentwo), _amount, rate);
  }

}
