import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
    if(!darkMode){
      document.querySelector('html').setAttribute('color-theme', 'dark');
    }else{
      document.querySelector('html').removeAttribute('color-theme');
    }
    
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
