import { Facebook } from "@mui/icons-material";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUpUpper() {
  const [signUpData, setSignUpData] = useState({
    email: "",
    userName: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setSignUpData({ ...signUpData, email: e.target.value });
  };

  const handlePassword = (e) => {
    setSignUpData({ ...signUpData, password: e.target.value });
  };

  const handleUsername = (e) => {
    setSignUpData({ ...signUpData, userName: e.target.value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    axios
      .post("http://16.170.173.197/users/signup", signUpData)
      .then((res) => {
        axios
          .post("http://16.170.173.197/users/login", {
            email: signUpData.email,
            password: signUpData.password,
          })
          .then(({ data }) => {
            const token = data.token;
            localStorage.setItem("token", token);
            localStorage.setItem("currentUser", JSON.stringify(data.user));
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="signup-details">
        <p>Sign up to see photos and videos from your friends.</p>
        <div className="login-with-facebook">
          <button>
            <span>
              <Facebook></Facebook>
            </span>
            Log in with Facebook
          </button>
        </div>
        <div className="or-div">
          <div className="dividor"></div>
          <div className="or">Or</div>
          <div className="dividor"></div>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSignIn}>
            <input
              type="text"
              onChange={handleEmail}
              value={signUpData.email}
              placeholder="Email"
            />
            <input
              type="text"
              value={signUpData.userName}
              onChange={handleUsername}
              placeholder="Username"
            />
            <input
              type="password"
              value={signUpData.password}
              onChange={handlePassword}
              placeholder="Password"
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <p>
          By signing up, you agree to our Terms, Data Policy and Cookies Police
        </p>
      </div>
    </div>
  );
}

export default SignUpUpper;
