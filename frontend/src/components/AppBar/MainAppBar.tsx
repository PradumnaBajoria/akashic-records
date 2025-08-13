import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, IconButton, Tooltip } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";
import AutoStoriesIcon from "@mui/icons-material/AutoStories"; // anime icon
import MenuBookIcon from "@mui/icons-material/MenuBook"; // manga icon

const MainAppBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mode, toggleTheme } = useThemeContext();

  const tabValue = location.pathname === "/profile" ? 1 : 0;

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    if (newValue === 0) navigate("/");
    else if (newValue === 1) navigate("/profile");
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: mode === "anime"
          ? "linear-gradient(90deg, #7b2cbf, #4cc9f0)"
          : "black",
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Akashic Records
        </Typography>
        <Tabs value={tabValue} onChange={handleChange} textColor="inherit" indicatorColor="secondary">
          <Tab label="Anime" />
          <Tab label="Profile" />
        </Tabs>
        <Tooltip title={`Switch to ${mode === "anime" ? "Manga" : "Anime"} Theme`}>
          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === "anime" ? <MenuBookIcon /> : <AutoStoriesIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default MainAppBar;
