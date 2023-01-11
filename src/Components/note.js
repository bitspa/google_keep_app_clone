import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Note = (props) => {
    const deleteNode=()=>{
        props.deleteItem(props.id);
    }
  return (
    <div className='note'>
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className='btn' onClick={deleteNode}>
           <DeleteOutlineIcon className='deleteIcon'/>
           </button>
        </div>
    </div>
  )
}
export default Note;