import React, {useState} from 'react'

const EditNote = ({id, isEditing, setIsEditing, notes, setNotes, previousText}) => {

  const [note, setNote] = useState(previousText);

  const handleChange = (value) => {
    setNote(value)
  }

  const handleSubmit = (note) => {
    submitNote(note);
    setIsEditing(!isEditing)
  }

  const submitNote = (note) => {

    const newList = notes.map((item) => {
      if (item.id === id) {
        const updatedNote = {
          ...item,
          description: note
        }
        return updatedNote
      }
      return item
    })

    setNotes(newList)
  }

  return (
    <div> 
      <form onSubmit={()=> handleSubmit(note)}>
        <textarea 
          value={note} 
          onChange={(event) => handleChange(event.target.value)}
          placeholder={previousText}
          rows='4'
          cols='40'
        />    
        <button>Save</button>
      </form>
    </div>
  )
}

export default EditNote