import { createTheme } from "@mui/material/styles";

const mangaTheme = createTheme({
  palette: {
    primary: { main: "#000000" },
    secondary: { main: "#ffffff" },
    background: { default: "#f5f5f5", paper: "#ffffff" },
    text: { primary: "#000000", secondary: "#555555" },
  },
  typography: {
    fontFamily: '"Roboto Slab", serif',
  },
});

export default mangaTheme;
