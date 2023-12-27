import './App.css';
import React, { useState, useEffect} from 'react';
import {showNotes} from './contract';
import {formatTime, formatDate} from './functions';
import Note from './Note';
import AddNote from './AddNote'; 

function App() {
  const [notes, setNotes] = useState([]);
 

  useEffect(()=>{
    getNotesList(); 
  }, [])

  const getNotesList =async ()=>{
    await showNotes().then((n)=>setNotes(n));
  }

  return (
    <div className="container">
      
        <p>
          <div className="notes-list">
          <AddNote func={getNotesList()}/>
          {notes.map((note, index)=>{
            return <Note 
            index={index}
            noteText={note.myNote} 
            date={formatDate(note.timestamp)}
            time = {formatTime(note.timestamp)}
            func={getNotesList()}
            />  
          })} 
          
          </div>
          

        </p>
    </div>
  );
}

export default App;