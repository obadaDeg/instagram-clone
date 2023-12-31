import React, { useEffect } from "react";
import "./Home.css";
import { Link, Route, Routes, Switch } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import NavBar from "../NavBar/NavBar";
import Explore from "../../pages/Explore/Explore.jsx";
import Profile from "../../pages/Profile/Profile.jsx";
import LoginPage from "../LoginPage/LoginPage.jsx";
import MainContent from "../MainContent/MainContent";
import axios from "axios";

// import MainContent from "../MainContent/MainContent";

const drawerWidth = 240;

function Home() {
  

  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <NavBar />
        </Grid>
        <Grid item xs={10}>
          <MainContent />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
