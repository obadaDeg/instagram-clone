import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Container, Divider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import setup from "../../assets/iPhoneScreen.png";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import "./Post.css";
import PostSettigns from "./PostSettings";

function Post({ post }) {
  const [liked, setLiked] = useState(true);
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <Container maxWidth="sm">
      <div className="post-container">
        <div className="post-header">
          <div className="post-owner">
            <Avatar className="post-avatar" src={post.user.avatar} sx={{}} />
            <p className="user-name">{post.user.userName}</p>
          </div>
          <div>
            <PostSettigns post={post}/>
          </div>
        </div>
        <Box className={"post-content"}>
          <img src={post.image} alt="" />
        </Box>
        <div className="post-interactions">
          <div>
            <Button
              onClick={toggleLike}
              startIcon={liked ? <FavoriteBorderIcon /> : <FavoriteIcon />}
              disableRipple
            />
            <Button
              startIcon={<ChatBubbleOutlineOutlinedIcon />}
              disableRipple
            />
            <Button startIcon={<SendIcon />} disableRipple />
          </div>
          <div>
            <Button startIcon={<BookmarkBorderOutlinedIcon />} disableRipple />
          </div>
        </div>
        <div className="post-text">
          <p className="post-text-username">
            {" "}
            {!liked ? post.likes.length + 1 : post.likes.length} likes
          </p>
          <div className="description-content">
            <div className="description-content-inner">
              <p className="post-text-username">{post.user.userName}</p>
            </div>
            <div className="description-content-inner">
              <p>{post.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Post;
