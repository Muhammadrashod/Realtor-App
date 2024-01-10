import React, { useState, useEffect, useMemo, useCallback, ReactNode } from "react";
import { ThemeContext, themes } from "./themeContext";

interface ThemeProviderProps {
  children : ReactNode;
}

export const ThemeProvider = ({ children} : ThemeProviderProps) => {
  const [themeValue, setThemeValue] = useState(themes.light);

  useEffect(() => {
    const persistedTheme = JSON.parse(localStorage.getItem("currentTheme")!);

    if (persistedTheme) {
      setThemeValue(persistedTheme);
    }
  }, [themeValue]);

  const toggleTheme = useCallback(() => {
    setThemeValue((prevValue) =>
      prevValue ===  themes.dark ? themes.light : themes.dark
    );
  }, []);

  const contextValue = useMemo(() => {
    return ({
      theme: themeValue,
      toggleTheme: toggleTheme,
    });
  }, [themeValue, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
