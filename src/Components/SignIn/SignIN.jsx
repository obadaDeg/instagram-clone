import React, { useState } from "react";
import "../LoginPage/LoginPage.css";

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
      <input
        className="logipage__text"
        onChange={handleEmailChange}
        type="text"
        placeholder="Phone number, username, or email"
      />
      <input
        className="logipage__text"
        onChange={handlePasswordChange}
        type="password"
        placeholder="Password"
      />
      <button className="login__button" onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
}

export default SignIN;
