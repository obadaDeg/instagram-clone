import React from "react";
import { Navigate } from "react-router-dom";

function MainAuth({ children }) {
  const token = localStorage.getItem("token");
  return (token ? <>{children}</> : <Navigate to="/Login" />)
}

export default MainAuth;
