import { Facebook } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUpUpper() {
  const [email, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    e.preventDefault();
    setEmailId(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleSign = (e) => {
    axios
      .post("http://16.170.173.197/users/signup", {
        username: username,
        email: email,
        password,
      })
      .then((res) => {
        axios
          .post("http://16.170.173.197/users/login", {
            email: email,
            password,
          })
          .then(({ data }) => {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
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
        <input type="text" onChange={handleEmail} placeholder="Email" />
        <input type="text" onChange={handleUsername} placeholder="Username" />
        <input
          type="password"
          onChange={handlePassword}
          placeholder="Password"
        />
        <button type="submit" onSubmit={handleSign}>
          Sign Up
        </button>
      </div>
      <p>
        By signing up, you agree to our Terms, Data Policy and Cookies Police
      </p>
    </div>
  );
}

export default SignUpUpper;
