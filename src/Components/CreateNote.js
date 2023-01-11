import React,{useState} from 'react'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
function CreateNote(props) {
const [expand,setExpand]=useState(false)
const [note,setNote]=useState({
    title:"",
    content:""
});
const expandIt=()=>{
    setExpand(true);
}
const btoNormal=()=>{
    setExpand(false);
}
const InputEvent=(event)=>{
    const {name,value}=event.target
    setNote((old)=>{
        return {
            ...old,
           [name]:value,
        }
    })
}
const addEvent=()=>{
props.passNote(note);
setNote({
    title:"",
    content:"",
})
}
  return (
    <div className="main_note" onDoubleClick={btoNormal}>
     <form>
        {expand?
        <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"/>:null}
        <textarea cols=""rows=""  name="content" value={note.content} onChange={InputEvent} placeholder="write a note..." onClick={expandIt} ></textarea>
      {expand?
        <Button onClick={addEvent}>
          <AddIcon className="plus_sign"/>
        </Button>:null}
     </form>
    </div>
  )
}
export default CreateNote
