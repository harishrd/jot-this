import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import axios from "axios";

const App = () => {
  // State variables
  const [notes, setNotes] = useState([]); // State to store notes fetched from the backend
  const [searchText, setSearchText] = useState(""); // State to store the search text
  const [darkMode, setDarkMode] = useState(false); // State to toggle dark mode

  // Fetch notes from the backend
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:8000/notes");
        setNotes(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotes();
  }, []);

  // Function to add a note
  const addNote = async (text) => {
    const date = new Date().toLocaleDateString();
    const newNote = {
      text: text,
      date: date,
      id: nanoid(),
    };
    // console.log(newNote);

    try {
      const response = await axios.post("http://localhost:8000/notes", newNote);
      setNotes([...notes, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to delete a note
  const deleteNote = async (_id) => {
    // console.log("Deleting note with _id:", _id); // Make sure _id is correct
    try {
      await axios.delete(`http://localhost:8000/notes/${_id}`,{method: 'DELETE'});
      const newNotes = notes.filter((note) => note._id !== _id); // Use _id field here
      setNotes(newNotes);
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;