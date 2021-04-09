import React from 'react'
import Note from './Note'

const NoteList = ({deleteNote, editNote, notes}) => {

  return (
    <div>
      {notes.map((note) => {
        return (
          <Note key={note.id} {...note} deleteNote={deleteNote} editNote={editNote}/>
        )
      })}
    </div>
  )
}

export default NoteList
