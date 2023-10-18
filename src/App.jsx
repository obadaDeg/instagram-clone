import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Home from "./pages/HomePage/Home.jsx";
import Messages from "./pages/MessagesPage/Messages.jsx";
import Explore from "./pages/Explore/Explore";
import Profile from "./pages/Profile/Profile";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
