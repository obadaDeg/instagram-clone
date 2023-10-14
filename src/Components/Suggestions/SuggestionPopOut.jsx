import { Avatar, Button } from "@mui/material";
import React from "react";

function SuggestionPopOut({ user, btn = true }) {
  return (
    <>
      <div className="suggestion-user">
        <div className="suggestion-user-avatar">
          <Avatar src={user.avatar} alt="" />
        </div>
        <div className="suggestion-user-body">
          <div className="suggestion-user-info">
            <div className="suggestion-user-username">{user.userName}</div>
            {!btn ? (
              <div className="suggestion-user-name">name</div>
            ) : (
              <div className="suggestion-user-name">Followed by</div>
            )}
          </div>
          <div className="suggestion-user-follow">
            {btn ? (
              <Button variant="text" disableRipple>
                Follow
              </Button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SuggestionPopOut;
