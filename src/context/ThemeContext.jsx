"use client";

import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("ligth");

  const toggleTheme = () => {
    setTheme(theme => theme === 'ligth' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export function useTheme() {
  return useContext(ThemeContext);
}
