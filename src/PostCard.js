import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { red, white, green } from "@material-ui/core/colors";
//import { FavoriteIcon, ShareIcon } from "@material-ui/icons";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

export default function PostCard(props) {
  const classes = makeStyles(theme => ({
    root: {
      maxWidth: 345
    },
    content: {
      height: 300,      
      backgroundColor: props.bgcolor[400],
	  color:white
    },
    avatar: {
      backgroundColor: red[500]
    }
  }))();

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={props.book}
        subheader="September 14, 2016"
      />
      <CardContent className={classes.content}>
        <Typography variant="h3"  component="p">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
