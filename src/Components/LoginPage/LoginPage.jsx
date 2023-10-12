import "./LoginPage.css";
import React, { useState } from "react";
import { Divider, Grid } from "@mui/material";
import loginPageImg from "../../assets/loginPageImg.svg";
import { Link } from "react-router-dom";
import SignUpUpper from "../SignUp/SignUpUpper";
import { Facebook } from "@mui/icons-material";
import SignInUpper from "../SignIn/SignInUpper";
import instagramLogo from "../../assets/instagram-logo.png";
import SignInLower from "../SignIn/SignInLower";
import SignUpLower from "../SignUp/SignUpLower";


function LoginPage() {
  let [flag, setFlag] = useState(true);

  const handleFlag = () => {
    setFlag(!flag);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <div className="main">
            <div className="left-side">
              <img src={loginPageImg} alt="" width={"450px"} />
              {/* <img src={"../../assets/loginPageImg.svg"} alt="" />  why this one doesn't work?*/}
            </div>

            <div className="right-side">
              <div className="upper-div">
                <img className="instagram-logo" src={instagramLogo} alt="" />
                {flag? <SignInUpper />: <SignUpUpper />}
              </div>

              <div className="lower-div">
                {flag? <SignInLower handleFlag={handleFlag}/> : <SignUpLower handleFlag={handleFlag}/>}
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
}


export default LoginPage;
