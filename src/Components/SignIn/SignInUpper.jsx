import React, { useState } from "react";
import "../LoginPage/LoginPage.css";
import { Facebook } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function SignIN() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }
  
  const handleLogin = (e) => {
    axios
      .post("http://16.170.173.197/users/login", { email: email, password })
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("current-account", JSON.stringify(data.user));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }


  

  return (
    <div>
      <div className="login-details">
        <div className="login-form">
          <input type="text" onChange={handleEmail} placeholder="Phone number, username, or email" />
          <input type="password" onChange={handlePassword} placeholder="Password" />
          <button type="submit" onSubmit={handleLogin}>Log In</button>
        </div>
        <div className="or-div">
          <div className="dividor"></div>
          <div className="or">Or</div>
          <div className="dividor"></div>
        </div>

        <div className="login-with-facebook">
          <button>
            <span>
              <Facebook></Facebook>
            </span>
            Log in with Facebook
          </button>
        </div>
        <div className="forgot-password">
          <Button variant="text" disableRipple sx={{color: "#ffffff", textTransform: 'none'}}>Forgot Password</Button>
        </div>
      </div>
      <div className="signup-option">
      </div>
    </div>
  );
}

export default SignIN;
