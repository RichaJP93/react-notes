import React, {useState, useEffect} from 'react'

import './App.css';
import AddNote from './components/AddNote'
import NoteList from './components/NoteList'
import data from './data';

const App = () => {
  const [notes, setNotes] = useState([])

  useEffect(()=> {
    setNotes(data)
  }, [])

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const editNote = () => {
    
  }

  return (
    <div className="App">
      <h1>Notes</h1>
      <AddNote setNotes={setNotes} notes={notes}/>
      <NoteList deleteNote={deleteNote} notes={notes} setNotes={setNotes}/>
    </div>
  );
}

export default App;
