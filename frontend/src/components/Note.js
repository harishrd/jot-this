import React, { useState } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
// import { omit } from "lodash"; // Import the omit function

const Note = ({ _id, text, date, handleDeleteNote, handleEditNote }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

    const onDeleteClick = () => {
        handleDeleteNote(_id);
    };

    const onEditClick = () => {
        setIsEditing(true);
    };

    const onSaveClick = () => {
        // Omit the _id field when calling handleEditNote
        console.log("editedText:", editedText);
        handleEditNote(_id, editedText);
        setIsEditing(false);
    };

    return (
        <div className={`note ${isEditing && "editing"}`}>
            {!isEditing ? (
                <span>{text}</span>
            ) : (

                <textarea
                    rows="4"
                    cols="10"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                />
            )}
            <div className="note-footer">
                <small>{date}</small>
                <div className="edit-options">
                    {!isEditing ? (
                        <>
                            <MdEdit onClick={onEditClick} className="edit-icon" size="1.3em" />
                            <MdDeleteForever
                                onClick={onDeleteClick}
                                className="delete-icon"
                                size="1.3em"
                            />
                        </>
                    ) : (
                        <button className="save" onClick={onSaveClick}>
                            Save
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Note;
