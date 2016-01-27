import React from 'react';
import mui from 'material-ui';
import Actions from '../actions'
var {ListItem}= mui;

class Channel extends React.Component{
    constructor(props){
        super(props);
    }

    onClick(){
        Actions.channelOpened(this.props.channel);
    }

    render(){
        let style={};
        if (this.props.channel.selected){
            style.backgroundColor= '#ccc';
        }
        return(
            <ListItem
            style={style}
            href={'/#/chat/'+this.props.channel.key}
            key={this.props.channel.key}>
                {this.props.channel.name}
            </ListItem>
        )
    }
}

export default Channel;