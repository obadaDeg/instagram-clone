import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import {
  Button,
  Avatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import insta_log from "../../assets/instagram-logo.png";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Explore as ExploreIcon,
  Slideshow as SlideshowIcon,
  Chat as ChatIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Menu as MenuIcon,
  AddCircleOutline,
} from "@mui/icons-material";

const width = 175;
const fontSize = 17;

function NavBar() {
  return (
    <div className="navbar">
      <Box
        sx={{
          alignItems: "center",
          width: "fit-content",
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
          borderRight: ".5px solid #1d1d1d",
        }}
      >
        <div className="logo">
          <Link to="/">
            <img src={insta_log} alt="" />
          </Link>
        </div>
        <div className="navigations">
          <div className="pages">
            <Link to="/">
              <Button
                sx={{
                  fontSize: fontSize,
                  width: width,
                  borderRadius: "5px",
                  color: "#ffffff",
                }}
              >
                <HomeIcon />
                Home
              </Button>
            </Link>
              <Button
                sx={{
                  fontSize: fontSize,
                  width: width,
                  borderRadius: "5px",
                  color: "#ffffff",
                }}
              >
                <SearchIcon />
                Search
              </Button>
            <Link to="/explore">
              <Button
                sx={{
                  fontSize: fontSize,
                  width: width,
                  borderRadius: "5px",
                  color: "#ffffff",
                }}
              >
                <ExploreIcon />
                Explore
              </Button>
            </Link>
            <Link to="/Reels">
              <Button
                sx={{
                  fontSize: fontSize,
                  width: width,
                  borderRadius: "5px",
                  color: "#ffffff",
                }}
              >
                <SlideshowIcon />
                Reels
              </Button>
            </Link>
            <Link to="/message">
              <Button
                sx={{
                  fontSize: fontSize,
                  width: width,
                  borderRadius: "5px",
                  color: "#ffffff",
                }}
              >
                <ChatIcon />
                Messages
              </Button>
            </Link>
            <Link to="/">
              <Button
                sx={{
                  fontSize: fontSize,
                  width: width,
                  borderRadius: "5px",
                  color: "#ffffff",
                }}
              >
                <FavoriteBorderIcon />
                Notifications
              </Button>
            </Link>
          </div>
          <div className="create">
            <Button
              sx={{
                fontSize: fontSize,
                width: width,
                borderRadius: "5px",
                color: "#ffffff",
              }}
            >
              <AddCircleOutline />
              Create
            </Button>
          </div>
          <div className="profile">
            <Link to="/profile">
              <Button
                sx={{
                  fontSize: fontSize,
                  width: width,
                  borderRadius: "5px",
                  color: "#ffffff",
                }}
              >
                <Avatar></Avatar>
                Profile
              </Button>
            </Link>
          </div>
          <div className="menu">
            <Button
              sx={{
                fontSize: fontSize,
                width: width,
                borderRadius: "5px",
                color: "#ffffff",
              }}
            >
              <MenuIcon />
              Menu
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default NavBar;
