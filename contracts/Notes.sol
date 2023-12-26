// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
contract Notes{
    struct Note{
        uint index;
        string myNote;
        uint timestamp;
    } 
    Note[] notes;
    function addNote(string memory text) public{
        notes.push(Note({
            index: notes.length,
            myNote: text,
            timestamp: block.timestamp
        }));
    }

    function showNotes() external view returns(Note[] memory){
        return notes;
    }

    function deleteNote(uint _ind) public {
        for(uint i=_ind; i<notes.length-1; i++){
            notes[i] = notes[i+1];
        }
        notes.pop();
    }

    function editNote(uint _ind, string memory text) public {
        notes[_ind].myNote= text;
        notes[_ind].timestamp = block.timestamp;
    }
}