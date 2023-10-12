import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function SignUpLower({ handleFlag}) {
  return (
    <div className="lower-content">
      Have an account?{" "}
      <Button variant="text" onClick={handleFlag} disableRipple>
        Sign Up
      </Button>
    </div>
  );
}

export default SignUpLower