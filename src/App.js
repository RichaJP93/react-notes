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

  return (
    <div className="App">
      <h1>Notes</h1>
      <AddNote setNotes={setNotes} notes={notes}/>
      <NoteList notes={notes}/>
    </div>
  );
}

export default App;
