import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";
import NavBar from "../../Components/NavBar/NavBar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Messages.css";

const Messages = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: 1,
      username: "User1",
      lastMessage: "Hello, how are you?",
      avatarSrc: "/static/images/avatar/user1.jpg",
      // You can include a messages array for each user
      messages: [
        { id: 1, text: "Hi there" },
        { id: 2, text: "How's it going?" },
      ],
    },
    // ... (other user data)
  ];

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <NavBar />
        </Grid>
        <Grid item xs={10}>
          <Box
            sx={{
              border: "1px solid #1d1d1d",
              marginLeft: "-57px",
              position: "fixed",
              width: "400px",
              height: "100%",
              marginTop: "-1px",
            }}
          >
            <div className="buttons first">
              <Button disableRipple>
                Username
                <KeyboardArrowDownIcon />
              </Button>
              <Button startIcon={<BorderColorOutlinedIcon />} disableRipple />
            </div>
            <div className="buttons second">
              <Button disableRipple>Messages</Button>
              <Button disableRipple>Requests</Button>
            </div>
            <div className="conversations">
              <List
                className="list"
                sx={{
                  width: "100%",
                  overflow: "auto",
                  maxHeight: 510,
                }}
              >
                {users.map((user) => (
                  <Button
                    className="btn"
                    sx={{
                      color: "#ffffff",
                      textTransform: "none",
                    }}
                    key={user.id}
                    onClick={() => handleUserClick(user)} // Set selectedUser on click
                  >
                    <ListItem className="user-list-item">
                      <ListItemAvatar>
                        <Avatar alt={user.username} src={user.avatarSrc} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={user.username}
                        secondary={
                          <Typography variant="caption" color="#ffffff">
                            {user.lastMessage}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </Button>
                ))}
              </List>
            </div>
          </Box>
          <Box
            sx={{
              marginTop: "-1px",
              border: "1px solid #1d1d1d",
              width: "935px",
              height: "100%",
              position: "fixed",
              marginLeft: "345px",
            }}
          >
            {selectedUser ? (
              <>
                {selectedUser.messages.map((message) => (
                  <div key={message.id}>{message.text}</div>
                ))}
              </>
            ) : (
              <>
                <div className="default-view">
                  <WhatsAppIcon sx={{ fontSize: 250 }} />
                  <p>Send private photos and messages to a friend or group</p>
                  <Button variant="contained">Send Message</Button>
                </div>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Messages;
