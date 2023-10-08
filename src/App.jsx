import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import Home from "./Components/HomePage/Home";

function App() {
  // const isLoggedIn =
  //   localStorage.getItem("users") !== undefined &&
  //   localStorage.getItem("users") !== null;
  let isLoggedIn = true;
  return (
    <div className="App">
      
      <Home/>
      
    </div>
  );
}

export default App;
