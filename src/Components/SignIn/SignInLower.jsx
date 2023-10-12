import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function SignInLower({ handleFlag }) {
  return (
    <>
      <div className="lower-content">
        Don't have an account?
        <Button variant="text" onClick={handleFlag} disableRipple>
          Sign Up
        </Button>
      </div>
    </>
  );
}

export default SignInLower;
