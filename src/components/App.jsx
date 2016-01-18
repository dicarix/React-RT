import React from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            messages:[
                'hello there how are you?',
                'I am fine and you?'
            ]
        };
    }
    render(){
        var messageNode=this.state.messages.map((message)=>{
            return(
                <div style={{color:'blue'}}>{message}</div>
            );
        });
        return(
            <div>{messageNode}</div>
        )
    }
}

export default App;