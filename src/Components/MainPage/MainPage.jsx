import React, { useState, useEffect, useContext } from "react";
import "./MainPage.css";
import { Avatar, Divider } from "@mui/material";
import Post from "../Post/Post";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GlobalData } from "../../Context/GlobalContext";

const imageContext = require.context(
  "../../assets/StoriesAvatars",
  false,
  /\.(png)$/
);
const imageFiles = imageContext.keys();
const arrayOfPic = imageFiles.map((path) => imageContext(path));

function MainPage() {
  const globalData = useContext(GlobalData);
  const [description, setDescription] = useState("");
  
    
    const postList = globalData.posts.map((post, index) => {
      return <Post key={index} post={post} />;
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
