import React, { useState, useEffect } from "react";
import "./MainPage.css";
import { Avatar, Divider } from "@mui/material";
import Post from "../Post/Post";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const imageContext = require.context(
  "../../assets/StoriesAvatars",
  false,
  /\.(png)$/
);
const imageFiles = imageContext.keys();
const arrayOfPic = imageFiles.map((path) => imageContext(path));

function MainPage({ posts }) {
  const postList = posts.map((post) => {
    return (
      <Post
        id={post.id}
        user={post.user}
        image={post.image}
        description={post.description}
        likes={post.likes}
      />
    );
  });

  return (
    <div className="main-page">
      <div className="story-section">
        {arrayOfPic.map((item, index) => (
          <Avatar className="story" key={index} src={item} />
        ))}
        {arrayOfPic.map((item, index) => (
          <Avatar className="story" key={index} src={item} />
        ))}
        {arrayOfPic.map((item, index) => (
          <Avatar className="story" key={index} src={item} />
        ))}
      </div>
      <div className="post-section">
        {postList.length > 0 ? (
          postList
        ) : (
          <p style={{ textAlign: "center", marginTop: "50px" }}>
            No posts to show
          </p>
        )}
      </div>
    </div>
  );
}

export default MainPage;
