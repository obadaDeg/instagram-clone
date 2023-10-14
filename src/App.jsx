import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Home from "./Components/HomePage/Home.jsx";
import Messages from "./pages/MessagesPage/Messages.jsx";
import Explore from "./pages/Explore/Explore";
import Profile from "./pages/Profile/Profile";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";


function App() {


  return (
    <div className="App">
      <Routes>
          <Route index element={<Home />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
