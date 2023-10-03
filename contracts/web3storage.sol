// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract web3strorage {
    struct Access {
        address user;
        bool access;
    }

    mapping(address => string[]) value;
    mapping(address => mapping(address => bool)) ownership;
    mapping(address => Access[]) accessList;
    mapping(address => mapping(address => bool)) previousData;

    function add(address _user, string calldata _url) external {
        value[_user].push(_url);
    }

    function allow(address _user) external {
        ownership[msg.sender][_user] = true;
        if (previousData[msg.sender][_user] == true) {
            for (uint i = 0; i < accessList[msg.sender].length; i++) {
                if (accessList[msg.sender][i].user == _user) {
                    accessList[msg.sender][i].access = true;
                }
            }
        } else {
            accessList[msg.sender].push(Access(_user, true));
            previousData[msg.sender][_user] = true;
        }
    }

    function disAllow(address _user) external {
        ownership[msg.sender][_user] = false;

        for (uint i = 0; i < accessList[msg.sender].length; i++) {
            if (accessList[msg.sender][i].user == _user) {
                accessList[msg.sender][i].access = false;
            }
        }
    }
}


