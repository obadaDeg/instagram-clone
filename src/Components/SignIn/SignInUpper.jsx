import React, { useState } from "react";
import "../LoginPage/LoginPage.css";
import { Facebook } from "@mui/icons-material";

function SignIN() {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmailId(event.currentTarget.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleLogin = () => {
    // Perform login logic with emailId and password
  };

  return (
    <div>
      <div className="login-details">
        <div className="login-form">
          <input type="text" placeholder="Phone number, username, or email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log In</button>
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
          <a href="">Forgot password?</a>
        </div>
      </div>
      <div className="signup-option">
      </div>
    </div>
  );
}

export default SignIN;
