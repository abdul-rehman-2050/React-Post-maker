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
import {
  withStyles,
  useTheme,
  makeStyles,
  fade
} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paperWrapper: {
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.short
    }),
    borderColor: theme.custom.palette.itemBorderColor,
    borderWidth: theme.spacing(0.1),
    borderStyle: "solid"
  },
  wrapper: {
    display: "flex",
    flexDirection: "column"
  },
  inputTitleRoot: {
    ...theme.custom.fontFamily.metropolis,
    padding: theme.spacing(1.25, 2)
  },
  inputTitleInput: {
    fontWeight: 500,
    fontSize: "1rem",
    padding: 0,
    lineHeight: "1rem",
    verticalAlign: "middle",
    color: theme.text.primary
  },
  inputNoteRoot: {
    ...theme.custom.fontFamily.roboto,
    padding: theme.spacing(1.5, 2)
  },
  inputNoteInput: {
    fontWeight: 500,
    fontSize: "0.85rem",
    padding: 0,
    color: theme.palette.text.primary
  },
  barWrapper: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1, 2),
    justifyContent: "space-between"
  }
}));

export default function CreatePost() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Paper
      elevation={2}
      classes={{ root: classes.paperWrapper }}
      style={{ backgroundColor: theme.custom.palette.noteBackground[color] }}
    >
      <input type="text" />
    </Paper>
  );
}
