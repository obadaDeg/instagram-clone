import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Home from "./Components/HomePage/Home.jsx";
import Messages from "./pages/Messages/Messages";
import Explore from "./pages/Explore/Explore";
import Profile from "./pages/Profile/Profile";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";
import MainContent from "./Components/MainContent/MainContent";
import { Grid } from "@mui/material";
import { Login } from "@mui/icons-material";

function App() {
  const isLoggedIn = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Messages />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}



export default App;
