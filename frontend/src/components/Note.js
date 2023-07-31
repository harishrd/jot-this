import { MdDeleteForever } from "react-icons/md";

const Note = ({ _id, text, date, handleDeleteNote }) => {
    const onDeleteClick = () => {
        handleDeleteNote(_id); // Use the _id field as the identifier
    };

    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever
                    onClick={onDeleteClick}
                    className="delete-icon"
                    size="1.3em"
                />
            </div>
        </div>
    );
};

export default Note;
