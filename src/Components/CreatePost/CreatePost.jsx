import React, { useState } from "react";
import "./CreatePost.css";
import {
  Box,
  Button,
  Typography,
  Modal,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { styled } from "@mui/joy";

const modalStyle = {
  modal: {
    padding: "10px",
  },
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 500,
    bgcolor: "#1d1d1d",
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderRadius: "10px",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  divider: {
    width: "100%",
    backgroundColor: "#ffffff",
  },
  input: {
    width: "90%",
    color: "#ffffff",
    marginBottom: "20px",
  },
  uploadButton: {
    margin: "10px 0",
  },
  postButton: {
    alignSelf: "flex-end",
    marginTop: "auto",
  },
};

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

function CreatePost({ open, handleClose }) {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleCreatePost = () => {
    if (image) {
      console.log("Selected image:", image);
      // Upload the image to a server or perform other actions here
    }
    console.log("Description:", description);
  };

  return (
    <Modal open={open} onClose={handleClose} style={modalStyle.modal}>
      <Box sx={modalStyle.box}>
        <div style={modalStyle.header}>
          <Typography variant="h5">Create Post</Typography>
          <Divider style={modalStyle.divider} />
        </div>
        <div className="modal-body">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                style={modalStyle.input}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                InputProps={{ style: { color: "#ffffff" } }}
              />
            </Grid>
          </Grid>
          <Button
            component="label"
            variant="contained"
            color="primary"
            style={modalStyle.uploadButton}
          >
            Upload
            <VisuallyHiddenInput type="file" onChange={handleImageChange} />
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreatePost}
            style={modalStyle.postButton}
          >
            Post
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default CreatePost;
