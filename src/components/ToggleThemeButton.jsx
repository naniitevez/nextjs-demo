'use client'

import React, { useContext } from "react";
import ThemeProvider, { ThemeContext } from "../context/ThemeContext";

const ToggleThemeButton = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return <button onClick={toggleTheme}>Toggle Theme: {theme}</button>;
};

export default ToggleThemeButton;
