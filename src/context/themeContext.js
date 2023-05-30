import React, { useState, useContext, useEffect } from "react";

// Creating the context
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

// Creating the hooks for accessing the contexts
export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

// Creating the context provider
export const ThemeProvider = ({ children }) => {
  // Setting up the state
  const [dark, setDark] = useState(false);

  // Creating the function that will toggle the state
  const toggle = () => {
    setDark((prevState) => !prevState);
  };

  // Pulling the saved theme mode from local storage
  useEffect(() => {
    setDark(JSON.parse(localStorage.getItem("jpn-webshop-dark-mode")));
  }, []);

  // Setting the current theme mode into local storage
  useEffect(() => {
    localStorage.setItem("jpn-webshop-dark-mode", JSON.stringify(dark));
  }, [dark]);

  // Returning the context
  return (
    <ThemeContext.Provider value={dark}>
      <ThemeUpdateContext.Provider value={toggle}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
