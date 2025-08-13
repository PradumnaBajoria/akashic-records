import { createTheme } from "@mui/material/styles";

const animeTheme = createTheme({
  palette: {
    primary: { main: "#7b2cbf" },
    secondary: { main: "#4cc9f0" },
    background: { default: "#1a1a2e", paper: "#16213e" },
    text: { primary: "#ffffff", secondary: "#adb5bd" },
  },
  typography: {
    fontFamily: '"Zen Kurenaido", "Roboto Slab", sans-serif',
  },
});

export default animeTheme;
