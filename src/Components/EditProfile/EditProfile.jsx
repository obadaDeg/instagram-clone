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
  Select,
  MenuItem,
  InputLabel,
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
    height: "100%",
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

function EditProfile({ open, handleClose }) {
  const [user, setUser] = useState({
    bio: "",
    userName: "",
    status: "",
    profilePic: "",
    password: "",
  });
  const token = localStorage.getItem("token");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUser({ ...user, profilePic: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("bio", user.bio);
    formData.append("userName", user.userName);
    formData.append("status", user.status);
    formData.append("profilePic", user.profilePic);
    formData.append("password", user.password);

    axios
      .put("http://16.170.173.197/users", formData, {
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
    handleSubmit();
  };

  return (
    <Modal open={open} onClose={handleClose} style={modalStyle.modal}>
      <Box sx={modalStyle.box}>
        <Typography variant="h5" sx={{ marginTop: "15px" }}>
          Edit Profile
        </Typography>
        <Divider style={modalStyle.divider} />
        <div className="modal-body">
          <form>
            <Stack spacing={2}>
              <FormControl>
                <Input
                  style={modalStyle.input}
                  placeholder="Username"
                  color="primary"
                  value={user.userName}
                  onChange={(e) =>
                    setUser({ ...user, userName: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <Input
                  style={modalStyle.input}
                  placeholder="Password"
                  color="primary"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <Input
                  style={modalStyle.input}
                  placeholder="Bio"
                  color="primary"
                  value={user.bio}
                  onChange={(e) => setUser({ ...user, bio: e.target.value })}
                />
              </FormControl>
              <FormControl>
                <InputLabel
                style={modalStyle.input}
                >
                  Status
                </InputLabel>
                <Select
                  style={modalStyle.input}
                  placeholder="Status"
                  color="primary"
                  value={user.status}
                  onChange={(e) => setUser({ ...user, status: e.target.value })}
                >
                  <MenuItem value="public">Public</MenuItem>
                  <MenuItem value="private">Private</MenuItem>
                </Select>
              </FormControl>

              <FormControl>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </Button>
              </FormControl>
              {user.profilePic && (
                <img
                  src={user.profilePic}
                  alt="Selected"
                  style={modalStyle.image}
                />
              )}
              <Button type="submit" onClick={handleFormSubmit}>Edit</Button>
            </Stack>
          </form>
        </div>
      </Box>
    </Modal>
  );
}

export default EditProfile;
