import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import MainAppBar from "./components/AppBar/MainAppBar";

const App: React.FC = () => {
  return (
    <>
      <MainAppBar />
      <AppRoutes />
    </>
  );
};

export default App;
