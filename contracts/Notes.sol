// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
contract Notes{
    struct Note{
        string myNote;
        uint timestamp;
    } 
    Note[] notes;
    function addNotes(string memory text) public{
        notes.push(Note({
            myNote: text,
            timestamp: block.timestamp
        }));
    }

    function showNotes() external view returns(Note[] memory){
        return notes;
    }
}