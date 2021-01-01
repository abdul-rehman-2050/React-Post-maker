import React from "react";
import "./style.css";
import * as Colors from "@material-ui/core/colors";
import { makeStyles, Button, Grid, Paper, Hidden } from "@material-ui/core";
import { red, white, green } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TopBar from "./TopBar.js";
import PostCard from "./PostCard.js";
import CreatePost from "./CreatePost2.js";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appbar: {
    backgroundColor: "#2196F3"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const theme = createMuiTheme({
  typography: {
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
    ].join(",")
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ff4400",
      contrastText: "#fff"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00"
    },
    text: {
      error: "#FFFFFF"
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});

export default function App() {
  const classes = useStyles();
  const post = {
    id: "1",
    content:
      "آپ کہہ دیجیے کہ مجھ کو  حکم ہوا ہے کہ میں اللہ کی اس طرح عبادت کروں کہ عبادت کو اسی کے لیے خالص رکھوں اور مجھ کو  حکم ہوا ہے کہ  مسلمانوں میں اول میں ہوں   ",
    book: "خلاصہ تفسیر معارف القرآن",
    chapter: "جلد۷",
    bgcolor: green
  };
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <TopBar />

        <Grid container spacing={3} style={{ marginTop: 8 }}>
          <Grid item sm={4} md={3}>
            <Hidden xsDown>
              <Paper elevation={3} className={classes.paper}>
                xs=6
              </Paper>
            </Hidden>
          </Grid>

          <Grid item md={6} sm={8}>
            <CreatePost />
            <PostCard
              content={post.content}
              book={post.book}
              chapter={post.chapter}
              bgcolor={post.bgcolor}
            />
          </Grid>

          <Grid item xs={3}>
            <Hidden smDown>
              <Paper className={classes.paper}>xs=3</Paper>
            </Hidden>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
