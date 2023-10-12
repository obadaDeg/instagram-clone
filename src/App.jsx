import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Home from "./Components/HomePage/Home.jsx";
import Messages from "./pages/Messages";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";
import { Grid } from "@mui/material";

function App() {
  const isLoggedIn = true; // You can modify this logic for authentication

  return (
    <div className="App">
      <Grid container>
        <NavBar />
      </Grid>

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
