import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import {showNotes, addNotes, deleteNote, editNote} from './contract';
import {formatTime, formatDate} from './functions';
function App() {
  const [notes, setNotes] = useState([]);
  const myNote = useRef(null);
  const [isEdit, setIsEdit] = useState(false); 
  const [index, setIndex] = useState(null);

  useEffect(()=>{
    getNotesList(); 
  }, [])

  const getNotesList =()=>{
    showNotes().then((n)=>setNotes(n));
  }


  const editMyNote = (ind) => { 
    setIsEdit(true);
    setIndex(ind);
    myNote.current.value =notes[ind].myNote;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <input type="text" ref={myNote} placeholder="Enter your note here" />
          <button onClick={()=>(isEdit)? editNote(index, myNote.current.value).then(()=>getNotesList()) : addNotes(myNote.current.value).then(()=> getNotesList())}>{(isEdit)? "Save": "Add Note"}</button>
          {notes.map((note, index)=>{
            return (<div className="Card">
              <div className="noteText"><p>{note.myNote}</p></div>
              <button onClick={()=> deleteNote(index).then(()=> getNotesList())} className="deleteButton">Delete</button>
              <button onClick={()=> editMyNote(index)} className="editButton">Edit</button>
            </div>)
          })} 

        </p>
      </header>
    </div>
  );
}

export default App;