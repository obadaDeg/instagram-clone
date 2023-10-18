import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import { Facebook } from "@mui/icons-material";
import "../LoginPage/LoginPage.css";

function SignIN() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleUserName = (e) => {
    setLoginData({ ...loginData, email: e.target.value });
  };

  const handlePassword = (e) => {
    setLoginData({ ...loginData, password: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://16.170.173.197/users/login", loginData)
      .then(({ data }) => {
        const token = data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("currentUser", JSON.stringify(data.user));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="login-details">
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <input
              type="text"
              value={loginData.email}
              onChange={handleUserName}
              placeholder="Phone number, username, or email"
            />
            <input
              type="password"
              value={loginData.password}
              onChange={handlePassword}
              placeholder="Password"
            />
            <button type="submit">Log In</button>
          </form>
        </div>
        <div className="or-div">
          <div className="dividor"></div>
          <div className="or">Or</div>
          <div className="dividor"></div>
        </div>

        <div className="login-with-facebook">
          <button>
            <span>
              <Facebook />
            </span>
            Log in with Facebook
          </button>
        </div>
        <div className="forgot-password">
          <Button
            variant="text"
            disableRipple
            sx={{ color: "#ffffff", textTransform: "none" }}
          >
            Forgot Password
          </Button>
        </div>
      </div>
      <div className="signup-option"></div>
    </div>
  );
}

export default SignIN;
