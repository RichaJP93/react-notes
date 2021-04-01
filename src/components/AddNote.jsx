import React, {useState} from 'react'

const AddNote = ({setNotes, notes}) => {

  const [note, setNote] = useState('');

  const handleChange = (value) => {
    setNote(value)
  }

  const submitNote = (event) => {
    event.preventDefault()
    const sentNote = {
      'id': notes.length+1, 
      'description': note
    }
    setNotes([...notes, {...sentNote}])
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <textarea 
          value={note} 
          onChange={(event) => handleChange(event.target.value)}
          placeholder="Add a note"
          rows='4'
          cols='40'
        />
        <button>Save</button>
      </form>
    </div>
  )
}

export default AddNote;
