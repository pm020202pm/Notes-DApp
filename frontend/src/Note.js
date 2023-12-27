import {deleteNote, editNote} from './contract';
import {MdDeleteForever, MdEdit} from 'react-icons/md';
import React, { useState} from 'react';
import './App.css';
import { CircularProgress } from '@mui/material';
const Note = ({index, noteText, date, time, func}) =>{

    const [isEdit, setIsEdit] = useState(false); 
    const [myNote, setMyNote] = useState("");
    const [isLoad, setIsLoad] = useState(false);


    var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);

             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

const saveEdit= ()=>{  
    setIsLoad(true);
    editNote(index, myNote).then(()=> func).then(()=>setIsLoad(false)).then(()=>setIsEdit(false));
 }
    return (
        (!isEdit)?
        <div className="note">
            <div className="container1">
                <div className="container2">
                <span>{noteText}</span>
                </div>
                </div>
            <div className="note-footer">
                <small>{"Edited "+date+"  "+time}</small>
        
                <div className='icons'>
                <MdDeleteForever className="delete-icon" size="1.3em" onClick={()=> deleteNote(index).then(()=> func)}/>
                <MdEdit className="edit-icon" size="1.3em" onClick={()=>{setIsEdit(!isEdit); setMyNote(noteText)}}/>
                </div>
            </div>
        </div> :
            <div className="note new">
                
            <textarea rows="10" placeholder="Create a new note" onChange={(e)=> setMyNote(e.target.value)} defaultValue={noteText}></textarea>
            <div className="note-footer">
    
            {!isLoad && noteText!=myNote && <button className="save" onClick={()=>saveEdit()}>Save</button>}
            {isLoad && <CircularProgress size={20} color="secondary"/>}
            </div>  
    </div>
    )
 }

 export default Note;