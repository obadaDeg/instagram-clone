import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import axios from "axios";
import { Divider } from "@mui/material";

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
    maxHeight: 500,
    bgcolor: "#1d1d1d",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: "10px",
    color: "#ffffff",
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
    width: "250px",
    height: "250px",
  },
};

const CreatePost = ({ open, handleClose }) => {
  const [bio, setBio] = useState("");
  const [image, setImage] = useState(null);
  const [imageCover, setImageCover] = useState(null);
  const [userName, setUserName] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");

  const token = localStorage.getItem("token");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  const handleBio = (event) => {
    setBio(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImageCover(reader.result);
    };
    reader.readAsDataURL(file);
  };

  let formData = new FormData();

  formData.append("id", currentUser.id);
  formData.append("description", bio);
  formData.append("image", image);
  formData.append("userName", userName);
  formData.append("status", status);
  formData.append("password", password);

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .put("http://16.170.173.197/users", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        currentUser.bio = bio;
        currentUser.userName = userName;
        currentUser.status = status;
        currentUser.password = password;
        currentUser.avatar = imageCover;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    handleClose();
    setImageCover(null);
    setBio("");
    setImage(null);
    setUserName("");
    setStatus("");
    setPassword("");
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      style={modalStyle.modal}
      aria-labelledby="modal-modal-description"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle.box}>
        <Typography variant="h5" sx={{ marginBottom: "10px" }}>
          Edit Profile
        </Typography>
        <Divider sx={{ mb: 2, bgcolor: "#ffffff" }} />
        <form>
          <Input
            placeholder="bio"
            value={bio}
            onChange={handleBio}
            required
            fullWidth
            sx={{ mb: 2, color: "#ffffff" }}
            modalStyle={modalStyle.input}
          />
          <Input
            placeholder="userName"
            value={userName}
            onChange={handleUserNameChange}
            required
            fullWidth
            sx={{ mb: 2, color: "#ffffff" }}
            modalStyle={modalStyle.input}
          />
          <Input
            placeholder="Status"
            value={status}
            onChange={handleStatusChange}
            required
            fullWidth
            sx={{ mb: 2, color: "#ffffff" }}
            modalStyle={modalStyle.input}
          />
          <Input
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
            required
            fullWidth
            sx={{ mb: 2, color: "#ffffff" }}
            modalStyle={modalStyle.input}
          />
          {imageCover && (
            <img src={imageCover} alt="Uploaded" style={modalStyle.image} />
          )}

          <label htmlFor="image-upload">
            <Button
              variant="contained"
              component="span"
              sx={{
                fontFamily: "Signika",
                width: "100%",
                textAlign: "left",
                fontWeight: 600,
                marginBottom: "5px",
                paddingTop: "5px",
                paddingBottom: "5px",
                borderRadius: "10px",
                fontSize: "14px",
                color: "#ffffff",
                backgroundColor: "#1877F2",
                ":hover": {
                  bgcolor: "white",
                  color: "#1877F2",
                },
                "&:active": {
                  boxShadow: "none",
                  backgroundColor: "white",
                  color: "#1877F2",
                },
              }}
            >
              Upload Image
            </Button>
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              fontFamily: "Signika",
              width: "100%",
              textAlign: "left",
              fontWeight: 600,
              marginBottom: "5px",
              paddingTop: "5px",
              paddingBottom: "5px",
              borderRadius: "10px",
              fontSize: "14px",
              color: "#ffffff",
              backgroundColor: "#1877F2",
              ":hover": {
                bgcolor: "white",
                color: "#1877F2",
              },
              "&:active": {
                boxShadow: "none",
                backgroundColor: "white",
                color: "#1877F2",
              },
            }}
          >
            Update
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default CreatePost;
