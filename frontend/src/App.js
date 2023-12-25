import './App.css';
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import abi from './contractJson/Notes.json';


function App() {

  const [contract, setContract] = useState({
    contractAddress: null,
    contractABI: null,
    provider: null,
    signer: null,
    contract: null
  });


  const [notes, setNotes] = useState([]);

  useEffect(()=>{
    getContract();
  }, [])

  const getContract = async () => {
    const contractAddress = "0x424F76CD8a394B4496288f780A730C995ABB0f04";
    const contractABI = abi.abi;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const contractProvider = new ethers.Contract(contractAddress, contractABI, provider);
    setContract({contractAddress, contractABI, provider, signer,contract});

    const showNotes = await contractProvider.showNotes();
    setNotes(showNotes);
    console.log(showNotes[0].myNote);
  }


  const addNotes = async () => {
    const text = "note5";
    await contract.contract.addNotes(text);
    getContract();
  }

  const formatDate= (timestamp) => {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is 0-indexed, so we add 1
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
