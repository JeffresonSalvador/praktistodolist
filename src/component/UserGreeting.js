import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false,
             
        }
    }
    

    render() {
         
        return(
            this.state.isLoggedIn ? 
            <div>Welcome jeff</div> :
            <div>welcome guest</div>
        )
        // let message 
        // if(this.state.isLoggedIn){
        //     message = <div> Welcome jeff</div>
        // }else {
        //     message= <div>welcome guest</div>
        // }

        // return <div>{message}</div>
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome jeff
        //         </div>
        //     )    
        // }else {
        //     return(
        //         <div>
        //             Welcome guest
        //         </div>
        //     )
        // }

      
    }
}

export default UserGreeting
