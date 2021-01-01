import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Badge
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
//import { FavoriteIcon, ShareIcon } from "@material-ui/icons";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import RoundedAvatar from "./RoundedAvatar.js"
export default function PostCard(props) {
  const classes = makeStyles(theme => ({
    root: {
      maxWidth: 345
    },
    content: {
      height: 400,
      overflow: "auto",

      backgroundColor: props.bgcolor[400],
      color: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    avatar: {
      backgroundColor: red[500]
    },
    margin: {
      margin: theme.spacing(1)
    }
  }))();

  return (
    <Card>
      <CardHeader
        avatar={
          <RoundedAvatar displaychar={'R'} bgcolor={red[500]} isonline={true}/>
          
        }
        title={props.book}
        subheader="September 14, 2016"
      />
      <CardContent className={classes.content}>
        <Typography variant="h4" align="center" component="p">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Badge badgeContent={4} color="primary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton style={{ marginLeft: "auto" }}>
          <ChatBubbleOutlineIcon />
        </IconButton>
      </CardActions>

      <AccountCircle />
      <TextField id="input-with-icon-grid" label="Write Comment..." />
    </Card>
  );
}
