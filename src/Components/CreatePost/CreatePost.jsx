import React, { useState } from "react";
import "./CreatePost.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, Grid, TextField } from "@mui/material";
import { styled } from "@mui/joy";

const modalStyle = {
  modalStyle: { padding: "10px" },
  boxStyle: {
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
    paddingTop: "20px",
    paddingBottom: "20px",
    borderRadius: "10px",
  },

  dividerStyle: {
    width: "100%",
    backgroundColor: "#ffffff",
    martinTop: "100px",
    marginBottom: "20px",
  },

  inputStyle: {
    width: "90%",
    color: "#ffffff",
    marginBottom: "20px",
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

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      // You can add further validation if needed (e.g., file type, size)
      setImage(file);
    }
  }

  function handleCreatePost() {
    if (image) {
      // Handle image upload or display a preview
      console.log("Selected image:", image);
      // You can upload the image to a server or perform other actions here
    }

    // Handle other post creation actions (e.g., description)
    console.log("Description:", description);
  }

  return (
    <Modal open={open} onClose={handleClose} style={modalStyle.modalStyle}>
      <Box sx={modalStyle.boxStyle}>
        <Typography variant="h5">Create Post</Typography>
        <Divider style={modalStyle.dividerStyle} />
        <div className="modal-body">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                style={modalStyle.inputStyle}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
          </Grid>{" "}
          <Button component="label" variant="contained" color="primary">
            Upload
            <VisuallyHiddenInput type="file" onChange={handleImageChange} />
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreatePost}
          >
            Post
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default CreatePost;
