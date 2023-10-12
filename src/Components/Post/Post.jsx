import React, { useState } from "react";
import { Avatar, Box, Button, Container, Divider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import setup from "../../assets/iPhoneScreen.png";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Post.css"; // Import your CSS file

function Post(props) {
  const [liked, setLiked] = useState(true);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <Container maxWidth="sm">
      <div className="post-container">
        <div className="post-header">
          <div className="post-owner">
            <Avatar />
            <p className="user-name">Obada</p>
          </div>
          <Button className="btn" disableRipple>
            ...
          </Button>
        </div>
        <Box className={"post-content"}>
          <img src={setup} alt="setup" />
        </Box>
        <div className="post-interactions">
          <div onClick={toggleLike}>
            {liked ? <FavoriteBorderIcon /> : <FavoriteIcon />}
          </div>
          <ChatBubbleOutlineOutlinedIcon />
          <SendIcon />
          <BookmarkBorderOutlinedIcon style={{ marginLeft: "auto" }} />
        </div>
        <div className="post-text">
          <p className="likes-text">744 likes</p>
          <p className="user-name">omaradwn</p>
          <p className="user-caption">
            This is a test and static data will be changed using API.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Post;