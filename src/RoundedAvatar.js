/*https://github.com/dnsndrvsk/NT-Social-Network/blob/master/client/src/components/RoundAvatar/index.js

*/
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import {green } from "@material-ui/core/colors";
import { makeStyles, withStyles } from '@material-ui/core/styles';


const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);


export default function RoundAvatar(props){
  const onlineStyle = {
    border: "3px solid #8FBC8F",
    backgroundColor: props.bgcolor
  };
return (
	<StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >          	
	<Avatar style={props.isonline ? onlineStyle : null} >{props.displaychar}</Avatar>
	</StyledBadge>
);
}
