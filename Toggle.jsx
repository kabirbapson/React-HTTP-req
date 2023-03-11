import React from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  <ThemeContext.Provider value={{ theme: "", toggleTheme: false }}>
    {children}
  </ThemeContext.Provider>;
};
export const useTheme = () => ({ theme: "light" });

