import React, { useContext, useEffect } from 'react';
import { DarkModeContext } from './context/DarkModeProvider';
import style from './css/todo.module.css';

export default function AppTheme({ children }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    window.localStorage.setItem('darkmode', darkMode);
  }, [darkMode]);

  return (
    <div className={style.container}>
      <div className={style['theme_select_box']}>
        <input
          type="checkbox"
          id="darkmode_switch"
          value={darkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="darkmode_switch">{darkMode ? '🌝' : '🌞'}</label>
      </div>
      <main>
        {children}
      </main>
    </div>
  );
}
