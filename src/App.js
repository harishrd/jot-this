import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "28/07/2023",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "29/07/2023",
    },
    {
      id: nanoid(),
      // time: "This is my third note!",
      text: "This is my third note!",
      date: "30/07/2023",
    }
  ]);

  const [searchText, setSearchText] = useState('');
  // since the state lives in top level component, we need to pass the function down to the child component
  // using prop drilling we can pass the function down to the child component
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  // pass this deleteNote function down to the child component i.e., Note.js?
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Header
        
      />
      <Search
        handleSearchNote={setSearchText}
      />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );

};

export default App;