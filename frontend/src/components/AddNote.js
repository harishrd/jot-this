import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    // we shouldn't put this in state since user is not going to change
    const characterLimit = 200;

    const handleChange = (event) => { 
        // checking to avoid user from typing more than 200 characters
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    };
    
    const handleSaveClick = (event) => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    };

    return (
        <div className="note new-note">
            <textarea
                rows="6"
                cols="10"
                placeholder="Type to add a note..."
                value={noteText}
                onChange={handleChange}
            />
            <div className="note-footer">
                <small>{characterLimit - noteText.length} remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
}


export default AddNote;