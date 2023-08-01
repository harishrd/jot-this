import React from "react";

const Header = ({ handleToggleDarkMode }) => { 
    return (
        <div className="header">
            <h1>JotThis.</h1>
            <button
                onClick={() =>
                    handleToggleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )
                }
                className="toggle save"
            >
                Toggle Mode
            </button>
        </div>
    );
};

export default Header;