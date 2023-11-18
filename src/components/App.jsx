import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  let [notes, setNotes]=useState([
    {
      title:"Note title",
      content:"Note content"
    }
  ]);
  
  function addNote(note){
    setNotes((prevValue)=>
    {
      return [...prevValue, note];
    });
  }

  function delet(id)
  {
    setNotes(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  
  return (
    <div>
      <Header />
      <CreateArea 
      onAdd={addNote}/>

      {notes.map( (noteItem, index)=>{
        return <Note 
        key={index} 
        id={index} 
        del={delet}
        title={noteItem.title}
        content={noteItem.content}/>;
      })}
      <Footer />
    </div>
  );
}

export default App;
