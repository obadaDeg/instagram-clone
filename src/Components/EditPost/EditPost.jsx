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
    width: "300px",
  },
};

const EditPost = ({ open, handleClose, post }) => {
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("token");

  const handledescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  
  let formData = new FormData();

  formData.append("description", description);

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .put(`http://16.170.173.197/posts/${post.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        post.description = description;
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    handleClose();
    setDescription("");
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
          Edit Post
        </Typography>
        <Divider sx={{ mb: 2, bgcolor: "#ffffff" }} />
        <form>
          <Input
            placeholder="description"
            value={description}
            onChange={handledescriptionChange}
            required
            fullWidth
            sx={{ mb: 2, color: "#ffffff" }}
            modalStyle={modalStyle.input}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              width: "100%",
              textAlign: "left",
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

export default EditPost;
