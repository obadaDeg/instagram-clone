import React from "react";
import "./Home.css";
import { Route, Routes } from "react-router-dom";
import Messages from "../../pages/Messages";
import Explore from "../../pages/Explore";
import Profile from "../../pages/Profile";
// import NavBar from "../NavBar/NavBar";
// import MainContent from "../MainContent/MainContent";

function Home() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Message" element={<Messages />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default Home;
