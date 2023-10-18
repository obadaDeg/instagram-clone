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
  Create,
} from "@mui/icons-material";
import CreatePost from "../CreatePost/CreatePost.jsx";

const width = 175;
const fontSize = 17;

function NavBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
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
            <Link to="/Explore">
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
            <Link to="/Messages">
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
          </div>
          <div className="create">
            <Button
              onClick={handleOpen}
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
            <CreatePost open={open} handleClose={handleClose} />
          </div>
          <div className="profile">
            <Link to="/Profile">
              <Button
                sx={{
                  fontSize: fontSize,
                  width: width,
                  borderRadius: "5px",
                  color: "#ffffff",
                }}
              >
                <Avatar src={currentUser.avatar} sx={{maxWidth: "33px", maxHeight: "33px"}}></Avatar>
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
