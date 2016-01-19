import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar}= mui;

class Message extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ListItem
                leftAvatar={<Avatar src="https://lh3.googleusercontent.com/-QV_Flc9ia4U/AAAAAAAAAAI/AAAAAAAABYE/6KYhgLgW3fU/s92-c-k-no/photo.jpg"/>}>
                {this.props.message}
            </ListItem>
        )
    }
}

export default Message;