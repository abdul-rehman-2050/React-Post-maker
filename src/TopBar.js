import React from "react";
import {
  makeStyles,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default function TopBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">News</Typography>
        <Button variant="outlined" color="primary">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
