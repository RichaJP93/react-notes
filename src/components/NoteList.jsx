import React from 'react'
import Note from './Note'

const NoteList = ({deleteNote, notes, setNotes}) => {

  return (
    <div>
      {notes.map((note) => {
        return (
          <Note key={note.id} {...note} deleteNote={deleteNote} notes={notes} setNotes={setNotes}/>
        )
      })}
    </div>
  )
}

export default NoteList
