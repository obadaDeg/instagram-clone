import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link, Navigate } from "react-router-dom";
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
import NavBar from "../../Components/NavBar/NavBar";
import MainContent from "../../Components/MainContent/MainContent";
import axios from "axios";
import { GlobalData } from "../../Context/GlobalContext";

function Home() {
  const [globalData, setGlobalData] = useState({
    users: [],
    posts: [],
  });

  const token = localStorage.getItem("token");

  function getPosts() {
    axios
      .get("http://16.170.173.197/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGlobalData((prevGlobalData) => ({
          ...prevGlobalData,
          posts: res.data.posts,
        }));
      })
      .catch((err) => {
        console.log(err);
        console.log("____________________");
      });
  }

  function getUsers() {
    axios
      .get("http://16.170.173.197/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGlobalData((prevGlobalData) => ({
          ...prevGlobalData,
          users: res.data.users,
        }));
      })
      .catch((err) => {
        console.log(err);
        console.log("____________________");
      });
  }

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);

  return (
    <div>
      {!token ? (
        <Navigate to="/Login" />
      ) : (
        <GlobalData.Provider value={globalData}>
          <Grid container>
            <Grid item xs={2}>
              <NavBar />
            </Grid>
            <Grid item xs={10}>
              <MainContent />
            </Grid>
          </Grid>
        </GlobalData.Provider>
      )}
    </div>
  );
}

export default Home;
