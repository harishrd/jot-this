import { MdDeleteForever } from "react-icons/md";

const Note = () => { 
    return (
        <div className="note">
            <span>Hello! This is our first note!</span>
            <div className="note-footer">
                <small>27/07/2023</small>
                <MdDeleteForever className="delete-icon" size="1.3em" />
            </div>
        </div>
    );
};

export default Note;