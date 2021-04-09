import React, {useState} from 'react'
import EditNote from './EditNote'

const Note = ({id, description, deleteNote, editNote}) => {

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
          editNote={editNote}
          id={id} 
          isEditing={isEditing} 
          setIsEditing={setIsEditing}
          previousText={description}
        />
      }
            
    </div>
  )
}

export default Note
