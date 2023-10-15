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

function EditPost({ open, handleClose, postId }) {
  const [post, setUser] = useState({
    describtion: "",
  });
  const token = localStorage.getItem("token");

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("describtion", post.describtion);
    axios
      .put(`http://16.170.173.197/posts/${postId}`, formData, {
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
          Edit Post
        </Typography>
        <Divider style={modalStyle.divider} />
        <div className="modal-body">
          <form>
            <Stack spacing={2}>
              <FormControl>
                <Input
                  style={modalStyle.input}
                  placeholder="Describtion"
                  color="primary"
                  value={post.userName}
                  onChange={(e) =>
                    setUser({ describtion: e.target.value })
                  }
                />
              </FormControl>
              <Button type="submit" onClick={handleFormSubmit}>Edit</Button>
            </Stack>
          </form>
        </div>
      </Box>
    </Modal>
  );
}

export default EditPost;
