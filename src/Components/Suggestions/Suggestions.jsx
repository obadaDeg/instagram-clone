import React, { useContext } from "react";
import "./Suggestions.css";
import { Avatar, Button } from "@mui/material";
import SuggestionPopOut from "./SuggestionPopOut";
import { GlobalData } from "../../Context/GlobalContext";

function Suggestions({ users }) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const globalData = useContext(GlobalData);
  return (
    <div className="suggestions-container">
      {console.log(currentUser)}
      <SuggestionPopOut btn={false} />
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
          {globalData.users.length > 0 ? (
            globalData.users.map((user, index) => {
              return (
                <SuggestionPopOut
                  key={index}
                  btn={true}
                  user={user}
                ></SuggestionPopOut>
              );
            })
          ) : (
            <p style={{ textAlign: "center", marginTop: "50px" }}>
              No users to show{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
