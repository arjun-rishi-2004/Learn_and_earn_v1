// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
	int a = 99;
    function display() public view returns(int){
        return a;
    }
}