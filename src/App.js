
import { useEffect, useState } from "react";
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

  const [darkMode, setDarkMode] = useState(false);

  // to get the notes from the local storage
  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-date')
    );
    if(savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // to save the notes in the local storage
  useEffect(() => {
    localStorage.setItem('react-notes-app-date',
    JSON.stringify(notes))
  }, [notes]);

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
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );

};

export default App;