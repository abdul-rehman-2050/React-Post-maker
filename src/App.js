import React from "react";
import "./style.css";
import {
  makeStyles,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton
} from "@material-ui/core";
import { DeleteIcon } from "@material-ui/icons/Delete";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button variant="outlined" color="primary">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Button color="primary">Hello World</Button>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </div>
  );
}
