import React from "react";
import {
  Paper,
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
    marginBottom: 16,
	overflow:"auto",
	paddingRight: 16,
	paddingLeft: 16,
	paddingTop: 16,
	paddingBottom: 16,
	
  },
  details: {
    
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
    paddingBottom: theme.spacing(1)
  },
 
  pillButton:{
	marginLeft: "auto",
    borderRadius: 50,
	paddingLeft: theme.spacing(8),
	paddingRight: theme.spacing(8)
  }
}));

export default function CreatePost() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      
		
		<div className={classes.details}>
		
		
          <TextField
            placeholder="Write New Post..."
            multiline
            rows={4}
			variant="outlined"
            inputProps={{ "aria-label": "naked" }}
            fullWidth
          />
		
		<div className={classes.controls}>
		  <TextField
		   placeholder="Author:"
		   variant="outlined"
		   
		   />
		
		 <TextField
		   placeholder="Book"
		   variant="outlined"		   
		   />
		 <TextField
		   placeholder="Chapter"
		   variant="outlined"		   
		   />  
		 <TextField
		   placeholder="Page"
		   variant="outlined"		   
		   />		
		
			</div>
        
       
          <Button
            variant="contained"
            color="primary"
            className = {classes.pillButton}
          >
            Create
          </Button>
		</div>
      
    </Paper>
  );
}
