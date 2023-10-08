import React, { useState } from "react";
import "./LoginPage.css";
// import Grid from "@material-ui/core/Grid";
// import inst_image from "../../images/9364675fb26a.svg";
// import insta_logo from "../../images/logoinsta.png";
// import fb from "../../images/fb.png";
// import appstore from "../../images/app.png";
// import playstore from "../../images/play.png";
// import SignIN from "../SignIn/SignIN";
// import SignUp from "../SignUp/SignUp";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const changeLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      
    </div>
  );
}

export default LoginPage;
