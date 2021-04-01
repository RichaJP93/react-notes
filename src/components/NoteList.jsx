import React from 'react'
import Note from './Note'

const NoteList = ({notes}) => {
  
  return (
    <div>
      {notes.map((note) => {
        return (
          <Note key={note.id} {...note}/>
        )
      })}
    </div>
  )
}

export default NoteList
