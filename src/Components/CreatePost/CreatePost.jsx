import React, { useState } from "react";
import {
  Modal,
  Box,
  Button,
  Divider,
  Typography,
  FormControl,
  Input,
  Stack,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";

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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
    borderRadius: "10px",
  },
  divider: {
    width: "100%",
    backgroundColor: "#ffffff",
    margin: "20px 0",
  },
  input: {
    width: "90%",
    color: "#ffffff",
    marginBottom: "20px",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "200px",
  },
};
function CreatePost({ open, handleClose }) {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("token");
  const [error, setError] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!image) {
      setError("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);

    axios
      .post("http://16.170.173.197/posts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setError("");
    handleSubmit();
  };

  return (
    <Modal open={open} onClose={handleClose} style={modalStyle.modal}>
      <Box sx={modalStyle.box}>
        <Typography variant="h5" sx={{ marginBottom: "10px" }}>
          Create Post
        </Typography>
        <Divider style={modalStyle.divider} />
        <div className="modal-body">
          <form>
            <Stack spacing={2}>
              <FormControl>
                <Input
                  style={modalStyle.input}
                  placeholder="Description"
                  color="primary"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </Button>
              </FormControl>
              {image && (
                <img src={image} alt="Selected" style={modalStyle.image} />
              )}
              {error && (
                <p style={{ color: "red" }}>{error}</p>
              )}
              <Button type="submit" onClick={handleFormSubmit}>
                Submit
              </Button>
            </Stack>
          </form>
        </div>
      </Box>
    </Modal>
  );
}

export default CreatePost;
