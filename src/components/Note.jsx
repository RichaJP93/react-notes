import React, {useState} from 'react'
import EditNote from './EditNote'

const Note = ({id, description, deleteNote, notes, setNotes}) => {

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {!isEditing ? 
      <div>
        <p>{description}</p>
        <button onClick={()=> setIsEditing(!isEditing)}>Edit</button>
        <button onClick={()=> deleteNote(id)}>Delete</button>
      </div>
       : 
        <EditNote 
          id={id} 
          isEditing={isEditing} 
          setIsEditing={setIsEditing} 
          notes={notes} 
          setNotes={setNotes}
          previousText={description}
        />
      }
            
    </div>
  )
}

export default Note
