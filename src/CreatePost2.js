import React from "react";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  InputBase,
  TextareaAutosize,
  Button,
  TextField,
  Grid,
  Divider
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { borders } from "@material-ui/system";
import RoundedAvatar from "./RoundedAvatar.js";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginBottom: 16
  },
  details: {
    flex: "1 0 auto",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  },
  pillButton:{
	marginLeft: "auto",
    borderRadius: 50
  }
}));

export default function CreatePost() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <RoundedAvatar displaychar={"R"} bgcolor={red[500]} isonline={true} />
        }
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <TextField
            placeholder="Write New Post..."
            multiline
            rows={4}
			variant="outlined"
            inputProps={{ "aria-label": "naked" }}
            fullWidth
          />
		  <TextField
		   placeholder="Refference:"
		   variant="outlined"
		   fullWidth
		   />
        </CardContent>

        
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            className = {classes.pillButton}
          >
            Create
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
