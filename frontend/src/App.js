import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { ethers } from 'ethers';

import { contractAddress, contractABI } from './constants';

function App() {
  const [contract, setContract] = useState(null);
  const [notes, setNotes] = useState([]);
  const myNote = useRef(null);

  useEffect(()=>{
    getContract();
  }, [])

  const getContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    setContract(contract);
    const showNotes = await contract.showNotes();
    setNotes(showNotes);
  }

  const addNotes = async () => {

    const addNotes = await contract.addNotes(myNote.current.value);
    await addNotes.wait();
    getContract();
  }

  const formatDate= (timestamp) => {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return  day+ '-' + month + '-' + year;

  }
  const formatTime= (timestamp) => {
    const date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    minutes = (minutes<10) ? "0"+minutes : minutes;
    const time = (hours>12) ? hours-12+":"+minutes+" PM": (hours===0) ? 12+":"+minutes+" AM": hours+":"+minutes+" AM";
    return time;

  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <input type="text" ref={myNote} placeholder="Enter your note here" />
          <button onClick={()=>addNotes()}>Add Notes</button>
          {notes.map((note, index)=>{
            return <p key={index}>
              <p>{note.myNote}</p>
              <p>{formatTime(note.timestamp)}</p>
              <p>{formatDate(note.timestamp)}</p>
              </p>
          })} 
        </p>
      </header>
    </div>
  );
}

export default App;
