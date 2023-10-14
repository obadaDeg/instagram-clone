import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  Menu,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import NavBar from "../../Components/NavBar/NavBar";
import "./Profile.css";
import AppsIcon from "@mui/icons-material/Apps";
import BookmarkBorderOutlined from "@mui/icons-material/BookmarkBorderOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { Dropdown } from "@mui/joy";
import Settings from "./Settings";
import { useNavigate } from "react-router-dom";
import EditProfile from "../../Components/EditProfile/EditProfile.jsx";
import axios from "axios";

const imageContext = require.context(
  "../../assets/ExplorePics",
  false,
  /\.(avif|webp)$/
);
const imageFiles = imageContext.keys();
const arrayOfPic = imageFiles.map((path) => imageContext(path));

function Profile() {
  const number = 10;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const currentUser = JSON.parse(localStorage.getItem("current-account"));

  const [posts, setPosts] = useState([]);

  const getUsersPosts = () => {
    axios.get(`http://16.170.173.197/posts/${currentUser.id}`).then((res) => {
      setPosts(res.data.posts);
    });
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <NavBar />
        </Grid>
        <Grid item xs={10}>
          <div className="container">
            <div className="profile-header">
              <Avatar className="avatar" />
              <div className="profile-data">
                <div className="profile-username">
                  <h3>currentUser</h3>
                  <div className="btns">
                    <Button
                      className="profile-btn"
                      onClick={handleOpen}
                      variant="contained"
                      sx={{ marginTop: "-10px" }}
                    >
                      Edit Profile
                    </Button>
                    <EditProfile open={open} handleClose={handleClose} />
                    <Button
                      className="profile-btn"
                      variant="contained"
                      sx={{ marginTop: "-10px" }}
                    >
                      View Archive
                    </Button>
                    <Settings />
                  </div>
                </div>
                <div className="profile-status">
                  <div className="profile-information">
                    <p>{number} Posts</p>
                  </div>
                  <div className="profile-information">
                    <p>{number} Followers</p>
                  </div>
                  <div className="profile-information">
                    <p>{number} Following</p>
                  </div>
                </div>
                <div className="profile-bio">
                  <p>
                    <strong>Profile Name</strong>
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Autem natus quia facilis, sit provident, incidunt fugiat
                    nulla dicta alias distinctio, deserunt repellendus
                    asperiores consequatur odio iusto harum consectetur tenetur
                    obcaecati?
                  </p>
                </div>
              </div>
            </div>
            <Divider sx={{ backgroundColor: "#2b2b2b" }} />
            <div className="profile-content">
              <div className="profile-content-buttons">
                <Button variant="" disableRipple>
                  <div className="top-border"></div>
                  <AppsIcon sx={{ fontSize: "16px" }} />
                  Posts
                </Button>
                <Button variant="" disableRipple>
                  <div className="top-border"></div>
                  <BookmarkBorderOutlined sx={{ fontSize: "16px" }} />
                  Reels
                </Button>
                <Button variant="" disableRipple>
                  <div className="top-border"></div>
                  <AccountBoxOutlinedIcon sx={{ fontSize: "16px" }} />
                  Tagged
                </Button>
              </div>
              <div className="content">
                <ImageList className="image-list" cols={3} rowHeight={400}>
                  {" "}
                  {posts.map((post, index) => (
                    <ImageListItem className="image-container" key={index}>
                      <img
                        className="image"
                        src={post.image}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
