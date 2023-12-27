import React, {useState} from 'react';
import {addNotes} from './contract';
import { CircularProgress } from '@mui/material';
const AddNote =({func})=>{

    const [myNote, setMyNote] = useState("");
    const [isLoad, setIsLoad] = useState(false);

    const add= ()=>{
        setIsLoad(true);
        addNotes(myNote).then(()=>setIsLoad(false)).then(()=> func.then(()=>setMyNote("")));
    }
    return(
        <div className="note new">
                <textarea rows="8" cols="10" placeholder="Write a note..." onChange={(e)=> setMyNote(e.target.value)} value={myNote}></textarea>
                <div className="note-footer">
                   {myNote!=="" && !isLoad &&<div className="save" onClick={()=> add()}>save</div>}
                    {isLoad && <CircularProgress size={20} color="secondary"/>}
                </div>  
        </div>
    )
}

export default AddNote;