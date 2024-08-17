import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote, editNote } from "./redux/slice";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const notes = useSelector((state) => state.note)
  console.log("Notes", notes)
  const dispatch = useDispatch()

  const handleAddNote = () => {
   if (text){
    if (editId){
      dispatch(editNote({
        id: editId,
        text,
      }));
      setEditId(null)
    }else{
      dispatch(addNote({
        id: Date.now(),
        text,
      }));
    }
    setText("");
  }
  };
  
  const handleEdit = (note) => {
    setText(note.text);
    setEditId(note.id);
  };



  return (
    <div className="notes-container">
      <h1>To-Do-List</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your task..."
      />
      <button  onClick={handleAddNote}>
        {editId ? "Edit Note" : "Add Task"}
      </button>
      <ul>
         {notes.map((note) => (
          <li key={note.id}>
            {note.noteText}
            <button onClick={() => handleEdit(note)}>Edit</button>
            <button className="bn" onClick={() => dispatch(deleteNote(note.id))}>
              Delete
            </button>
          </li>
        ))} 
      </ul>
    </div>
  );
};

export default App;