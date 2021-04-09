import React, {useState} from 'react'

const EditNote = ({id, isEditing, setIsEditing, previousText, editNote}) => {

  const [note, setNote] = useState(previousText);

  const handleChange = (value) => {
    setNote(value)
  }

  const handleSubmit = (note) => {
    editNote(note, id);
    setIsEditing(!isEditing)
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