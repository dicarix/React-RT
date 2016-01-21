import React from 'react';
import mui from 'material-ui';
import trim from 'trim';
import Firebase from 'firebase';
var {Card}= mui;

class MessageBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            message:''
        }
        this.firebaseRef = new Firebase('https://react-stack-dicarix.firebaseio.com/messages');


    }

    onChange(evt){
        this.setState({
            message:evt.target.value
        });
    }
    onKeyUp(evt){
        //Check if is enter and is not an empty string
        if(evt.keyCode===13 && trim(evt.target.value) != ''){
            evt.preventDefault();
            this.firebaseRef.push({
                message:this.state.message
            });
            this.setState({
                message:''
            });
        }

    }

    render(){
        return(
            <Card className="messageBox">
                <textarea
                    value={this.state.message}
                    onChange={this.onChange.bind(this)}
                    onKeyUp={this.onKeyUp.bind(this)}
                ></textarea>
            </Card>
        )
    }
}

export default MessageBox;