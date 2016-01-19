import React from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            messages:[
                'hi there how are you?',
                'I am fine and you?'
            ]
        };
    }
    render(){
        var messageNode=this.state.messages.map((messages)=>{
            return(
                <div >{messages}</div>
            );
        });
        return(
            <div>{messageNode}</div>
        )
    }
}

export default App;