import React,{useState} from "react"
import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateNote from './Components/CreateNote';
import Note from './Components/note';
function App() {
  const [addItem,setAddItem]=useState([]);
  const addNote=(note)=>{
    setAddItem((old)=>
    {
      return[...old,note]
    })

  }
  
    const onDelete = (id) => {
      setAddItem((oldData) => {
          return oldData.filter((currData, index) => {
              return index !== id;
          });
      });
  };
  return (
    <div className="App">
      <Header/>
      <CreateNote passNote={addNote}/>
      {addItem.map((val,index)=>{
        return <Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
        />
      })}
      <Footer/>
    </div>
  );
}

export default App;
