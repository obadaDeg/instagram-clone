import React, { useEffect } from "react";
import "./MainContent.css";
import { Grid } from "@mui/material";
import Suggestions from "../Suggestions/Suggestions";
import MainPage from "../MainPage/MainPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MainContent() {
  // const token = localStorage.getItem("token");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9iYWRhZGFnaGxhc0BnbWFpbC5jb20iLCJ1c2VyTmFtZSI6Im9iYWRhIiwiaWF0IjoxNjk3Mjc4NTcxLCJleHAiOjE2OTczNjQ5NzF9.Y3Rbp_sK7JVtyfHvuLYGdsYUK3ld52G3I1Ay1nSeCeQ";
  const [posts, setPosts] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const navigate = useNavigate();

  function getUsers() {
    axios
      .get("http://16.170.173.197/users")
      .then(({ data }) => setUsers(data.users))
      .catch((err) => console.log(err));
  }

  function getPosts() {
    axios
      .get("http://16.170.173.197/posts", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setPosts(res.data.posts);
        posts.map((post) => {
          return axios
            .get(`http://16.170.173.197/posts/likes/${post.id}`)
            .then(({ data }) => {
              post.likesDetails = data;
            })
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err));
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/Login");
  }

  useEffect(() => {
    if (!token) {
      navigate("/Login");
    }
    getUsers();
    getPosts();
  }, []);
  return (
    <div>
      <Grid container>
        <Grid item md={8}>
          <MainPage posts={posts} />
        </Grid>
        <Grid item md={4}>
          <Suggestions users={users} />
        </Grid>
      </Grid>
    </div>
  );
}

export default MainContent;
