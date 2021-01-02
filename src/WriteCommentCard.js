import React from "react";
import {
	Card,
	CardHeader,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
	Button,TextField,Grid
	}	from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { red } from "@material-ui/core/colors";
import RoundedAvatar from "./RoundedAvatar.js"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
	marginTop:8,
	marginBottom:8
  },
  textfield:{
	  marginLeft:8,
	  marginRight: 8,
  },
  roundpill:{
	borderRadius:25,
	marginTop:8,
	marginBottom:8,
	paddingLeft:18,
	paddingRight:18	
  }
 
}));


export default function CreatePost() {
	 const classes = useStyles();
  return (
    <div className={classes.root}>  
  
         
        <RoundedAvatar displaychar={'R'} bgcolor={red[500]} isonline={true}/>                       
	         
		<TextField 
			className = {classes.textfield}
			id="outlined-basic" 
			label="Write Comment"
			variant="outlined" 			
			fullWidth/>	
	  
		<Button variant="contained" color="primary" className={classes.roundpill}>    
           Comment
		</Button> 
	
    </div>
  
  
  );
  
  
}