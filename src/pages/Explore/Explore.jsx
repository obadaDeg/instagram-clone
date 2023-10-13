import React from "react";
import { Grid, ImageList, ImageListItem } from "@mui/material";
import NavBar from "../../Components/NavBar/NavBar";
import "./Explore.css";

const imageContext = require.context(
  "../../assets/ExplorePics",
  false,
  /\.(avif|webp)$/
);
const imageFiles = imageContext.keys();
const arrayOfPic = imageFiles.map((path) => imageContext(path));

function Explore() {
  return (
    <div className="container">
      <Grid container>
        <Grid item xs={2}>
          <NavBar />
        </Grid>
        <Grid item xs={10}>
          <div className="image-list-container">
            <ImageList className="image-list" cols={3} rowHeight={400}>
              {" "}
              {/* Adjust the rowHeight */}
              {arrayOfPic.map((item, index) => (
                <ImageListItem className="image-container" key={index}>
                  <img
                    className="image"
                    src={item}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Explore;
