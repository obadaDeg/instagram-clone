import { Facebook } from "@mui/icons-material";
import React from "react";

function SignUpUpper() {
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
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </div>
      <p>By signing up, you agree to our Terms, Data Policy and Cookies Police</p>
    </div>
  );
}

export default SignUpUpper;
