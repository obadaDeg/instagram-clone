import * as React from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/Login");
  }

  return (
    <Dropdown>
      <TriggerButton>
        <SettingsIcon style={{ color: "#ffffff" }} />{" "}
        {/* Set icon color to white */}
      </TriggerButton>
      <Menu slots={{ listbox: StyledListbox }}>
        <StyledMenuItem>
          Profile
        </StyledMenuItem>
        <StyledMenuItem onClick={handleLogout}>
          Log out
        </StyledMenuItem>
      </Menu>
    </Dropdown>
  );
}

const darkTheme = {
  background: "#000000", // Black background color
  text: "#ffffff", // White text color
};

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0; /* Add margin to the submenu */
  min-width: 200px;
  border-radius: 8px;
  overflow: auto;
  outline: 0px;
  background: #1d1d1d; /* Change the submenu background color */
  color: ${darkTheme.text};
  box-shadow: 0px 4px 30px transparent; /* Remove the box shadow */
  z-index: 1;
  border: none; /* Remove the border */
  `
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: none; /* Remove the outline */
    background-color: ${darkTheme.background};
    color: ${darkTheme.text};
  }

  &.${menuItemClasses.disabled} {
    color: ${darkTheme.text};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: transparent; /* Remove the background on hover */
    color: ${darkTheme.text};
  }
  `
);

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 8px;
  padding: 8px 14px;
  line-height: 1.5;
  background: transparent; /* Remove the background */
  border: none; /* Remove the border */
  color: ${darkTheme.text};

  margin-top: 10px; /* Add margin from the top */

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: transparent; /* Remove the background on hover */
    border-color: transparent; /* Remove the border on hover */
  }

  &:focus-visible {
    border-color: transparent; /* Remove the border on focus */
    outline: none; /* Remove the outline on focus */
  }
  `
);
