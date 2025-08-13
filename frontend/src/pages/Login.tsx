import React from "react";
import axios from 'axios';

interface LoginUrlResponse {
  url: string;
}

const Login: React.FC = () => {
  const handleLogin = async () => {
    const res = await axios.get<LoginUrlResponse>('http://localhost:4000/auth/mal/login');
    // backend returns a json with the MAL authorize URL
    window.location.href = res.data.url;
  };


  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login with MyAnimeList</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
