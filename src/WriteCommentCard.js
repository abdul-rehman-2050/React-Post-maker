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
	marginBottom: 16
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));


export default function CreatePost() {
	 const classes = useStyles();
  return (
  <Card className={classes.root}>  
  <CardHeader
        avatar={
          <RoundedAvatar displaychar={'R'} bgcolor={red[500]} isonline={true}/>
          
        }
        
      />
      
	  <CardContent className={classes.content}>		        
		<TextField 
			id="outlined-basic" 
			label="Write Comment"
			variant="outlined" 			
			fullWidth/>	

	  </CardContent>	   
	  <CardActions>
		<Button variant="contained" color="primary">    
           Create
		</Button> 
		
	  </CardActions>
	 
	
  </Card>
  
  
  );
  
  
}