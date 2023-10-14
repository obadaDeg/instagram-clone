import React from "react";
import "./Suggestions.css";
import { Avatar, Button } from "@mui/material";
import SuggestionPopOut from "./SuggestionPopOut";

function Suggestions({ users }) {
  const user = localStorage.getItem("current-account");
  return (
    <div className="suggestions-container">
      {/* <SuggestionPopOut btn={false} users={user}></SuggestionPopOut> */}
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
          {users.map((user, index) =>{
          return <SuggestionPopOut user={user}></SuggestionPopOut>
          })}
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
