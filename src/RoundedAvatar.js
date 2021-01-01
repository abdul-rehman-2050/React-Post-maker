/*https://github.com/dnsndrvsk/NT-Social-Network/blob/master/client/src/components/RoundAvatar/index.js

*/
import React from 'react'
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar'

const onlineStyle = {
  border: '3px solid #8FBC8F'
}

const RoundAvatar = (props) => (
  <Avatar
    src={props.user.avatar}
    style={props.user.online.currently ? onlineStyle : null}
  />
)

RoundAvatar.propTypes = {
  user: PropTypes.object.isRequired
}

export default RoundAvatar