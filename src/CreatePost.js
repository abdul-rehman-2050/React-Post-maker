/*
Borrowed from:
https://github.com/KhoaMilan97/practice-react-material-ui/blob/master/src/components/CreatePost.js

 */

import React, { useState, useEffect, useContext } from "react";
import {
  Paper,
  Grid,
  CircularProgress,
  TextField,
  FormControl,
  InputBase,
  InputLabel,
  Collapse,
  Button
} from "@material-ui/core";
import { withStyles, makeStyles, fade } from "@material-ui/core/styles";

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}))(InputBase);
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1),
    width: "100%"
  },
  button: {
    marginLeft: 8,
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }
  }
}));

export default function CreatePost(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      style={{ marginTop: "5em", marginBottom: "5em" }}
    >
      <Grid item xs={10} sm={8} md={6} style={{ width: "100%" }}>
        <FormControl className={classes.margin}>
          <InputLabel shrink htmlFor="bootstrap-input">
            Title
          </InputLabel>
          <BootstrapInput fullWidth id="bootstrap-input" />
        </FormControl>
      </Grid>
      <Grid
        item
        xs={10}
        sm={8}
        md={6}
        style={{ width: "100%", marginTop: "1em" }}
      >
        <FormControl className={classes.margin}>
          <InputLabel shrink htmlFor="bootstrap-input">
            Body Content
          </InputLabel>
          <BootstrapInput
            component={TextField}
            multiline
            rows={15}
            fullWidth
            id="bootstrap-input"
          />
        </FormControl>
      </Grid>
      <Grid item xs={10} sm={8} md={6} style={{ width: "100%" }}>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          style={{ width: "14em" }}
        >
          Save new Post
          {loading && (
            <CircularProgress
              size={20}
              style={{ marginLeft: 5, color: "white" }}
            />
          )}
        </Button>
      </Grid>
    </Grid>
  );
}
