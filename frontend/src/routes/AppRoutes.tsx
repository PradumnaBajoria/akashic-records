import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import AnimeDetailsModal from "../components/AnimeDetailsModal";

const AppRoutes: React.FC = () => {
  const location = useLocation();

  // this allows us to show modal over the existing page
  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* Modal Route */}
      <Routes>
        <Route path="/anime/:id" element={<AnimeDetailsModal />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
