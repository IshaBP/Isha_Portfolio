import React from 'react';

import { ThemeContext } from '../../theme/themeContext';

const Themer = () => {
  const { theme, toggle } = React.useContext(ThemeContext);

  const changeTheme = () => {
    toggle();
  };

  console.log("theme", theme);
  return (
    <div className="themer">
      <button onClick={changeTheme}>Change</button>
    </div>
  );
  //   const { theme, toggle,  } = React.useContext(ThemeContext)
  // return (
  //   <div className={darkMode ? "dark-mode" : "light-mode"}>
  //     <nav>
  //       <div className="toggle-container">
  //         <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
  //         <span className="toggle">
  //           <input
  //             checked={darkMode}
  //             onChange={() => setDarkMode(prevMode => !prevMode)}
  //             id="checkbox"
  //             className="checkbox"
  //             type="checkbox"
  //           />
  //           <label htmlFor="checkbox" />
  //         </span>
  //         <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
  //         {/* <button onClick={() => setDarkMode(prevMode => !prevMode)}>
  //         Toggle
  //       </button> */}
  //       </div>
  //     </nav>
  //     <main>
  //       <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
  //       <h2>Toggle the switch to see some magic happen!</h2>
  //     </main>
  //     </div>
};

export default Themer;
