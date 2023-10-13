import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/HomePage/Home.jsx";
import Messages from "./pages/MessagesPage/Messages.jsx";
import Explore from "./pages/Explore/Explore";
import Profile from "./pages/Profile/Profile";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";

function App() {
  const isLoggedIn = true;
  const [loggedInOnce, setLoggedInOnce] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("/");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(currentLocation);
    } else {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
