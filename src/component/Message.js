
 import React, { Component } from 'react'
    
 class Message extends Component{

    constructor(){
            super()
            this.state = {
                message: 'Welcome Visitor'
            }
    }

    changeMessage(){
        this.setState({
            message: 'thankyou for subscribing'
        })
    }
    clickHandler(){
        alert("dewow")
    }

    render(){
        return (

            <div>
                 <h1 
                //  onClick={()=>this.clickHandler()}
                 >
                {this.state.message}
            </h1>
            <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
           
            ) 
            
    }


 }
 export default Message;