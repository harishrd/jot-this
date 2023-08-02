import React from "react";
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';


import { useState } from "react"; // Make sure to import 'useState'

const Header = ({ handleToggleDarkMode }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="header">
      <h1>JotThis.</h1>
      {/* <button
        onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}
        className="toggle save"
      >
        Toggle Mode
      </button> */}
      <DarkModeToggle
        mode={darkMode ? 'dark' : 'light'} // Convert to 'dark' or 'light' based on the state
        // dark="
        // light="Light"
        size="sm"
        inactiveTrackColor="#e2e8f0"
        inactiveTrackColorOnHover="#f8fafc"
        inactiveTrackColorOnActive="#cbd5e1"
        activeTrackColor="#334155"
        activeTrackColorOnHover="#1e293b"
        activeTrackColorOnActive="#0f172a"
        inactiveThumbColor="#1e293b"
        activeThumbColor="#e2e8f0"
        onChange={(mode) => {
          setDarkMode(mode === 'dark'); // Update the local state for dark mode
          handleToggleDarkMode(mode === 'dark'); // Update the parent component's state for dark mode
        }}
      />
    </div>
  );
};

export default Header;



// const Header = ({ handleToggleDarkMode }) => { 
//     return (
//         <div className="header">
//             <h1>JotThis.</h1>
//             <button
//                 onClick={() =>
//                     handleToggleDarkMode(
//                         (previousDarkMode) => !previousDarkMode
//                     )
//                 }
//                 className="toggle save"
//             >
//                 Toggle Mode
//             </button>

//         </div>
//     );
// };

// export default Header;