import React from 'react';

import { ThemeContext } from './themeContext';

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
};

export default Themer;
