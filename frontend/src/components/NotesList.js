import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note
                    key={note._id}
                    _id={note._id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={() => handleDeleteNote(note._id)} // Pass the id to handleDeleteNote
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

export default NotesList;
