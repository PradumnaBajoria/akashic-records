import React, { createContext, useState, useMemo, useContext } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import animeTheme from "../themes/animeTheme";
import mangaTheme from "../themes/mangaTheme";

type ThemeMode = "anime" | "manga";

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: "anime",
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>("anime");

  const theme = useMemo(() => (mode === "anime" ? animeTheme : mangaTheme), [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "anime" ? "manga" : "anime"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
