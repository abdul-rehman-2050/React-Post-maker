/*https://github.com/dnsndrvsk/NT-Social-Network/blob/master/client/src/components/RoundAvatar/index.js

*/
import React from "react";
import Avatar from "material-ui/Avatar";

export default (RoundAvatar = props => {
  const onlineStyle = {
    border: "3px solid #8FBC8F",
    backgroundColor: props.bgcolor
  };
  return <Avatar style={props.isonline ? onlineStyle : null} />;
});
