import React from "react";
import "./Home.css";
import { Link, Route, Routes, Switch } from "react-router-dom";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import Messages from "../../pages/Messages.jsx";
import Explore from "../../pages/Explore.jsx";
import Profile from "../../pages/Profile.jsx";
import LoginPage from "../LoginPage/LoginPage.jsx";

// import MainContent from "../MainContent/MainContent";


const drawerWidth = 240;

function Home() {
  return (
    <div>
      <Grid container>
        <Grid xs={3}>
          <NavBar />
        </Grid>
        
        <Grid xs={9}></Grid>
      </Grid>
    </div>
  );
}

export default Home;

