import React, { useContext, useEffect } from 'react';
import { DarkModeContext } from './context/DarkModeProvider';

export default function AppTheme({ children }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    window.localStorage.setItem('darkmode', darkMode);
  }, [darkMode]);

  return (
    <>
      <div className="theme_select_box">
        <input
          type="checkbox"
          id="darkmode_switch"
          value={darkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="darkmode_switch">{darkMode ? 'Dark' : 'Light'}</label>
      </div>
      <div className={`container ${darkMode ? 'theme-dark' : ''}`}>
        {children}
      </div>
    </>
  );
}
