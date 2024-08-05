import React from "react";
import { Menu, MenuItem } from "@mui/material";

export default function UserProfile({ anchorEl, handleClose, open }) {
  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ marginTop: "10px" }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          Sign up
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          Log in
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          Airbnb your home
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          Help centre
        </MenuItem>
      </Menu>
    </>
  );
}
