import React from "react";
import "./MainContent.css";
import { Grid } from "@mui/material";
import Suggestions from "../Suggestions/Suggestions";
import MainPage from "../MainPage/MainPage";
function MainContent() {
  return (
    <div>
      <Grid container>
        <Grid item md={8}>
          <MainPage />
        </Grid>
        <Grid item md={4}>
          <Suggestions />
        </Grid>
      </Grid>
    </div>
  );
}

export default MainContent;
