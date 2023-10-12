import React from "react";
import "./Suggestions.css";
import { Avatar, Button } from "@mui/material";
import SuggestionPopOut from "./SuggestionPopOut";

function Suggestions() {
  return (
    <div className="suggestions-container">
      <SuggestionPopOut btn={false}></SuggestionPopOut>
      <div>
        <div className="suggestions-header">
          <div className="header-text">
            Suggestions For You{" "}
            <Button variant="text" disableRipple>
              <p>See All</p>
            </Button>
          </div>
        </div>
        <div className="suggestions-body">
          <SuggestionPopOut></SuggestionPopOut>
          <SuggestionPopOut></SuggestionPopOut>
          <SuggestionPopOut></SuggestionPopOut>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
