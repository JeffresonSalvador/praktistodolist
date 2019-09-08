
    import React, { Component } from 'react'

    class Welcome extends Component{
        render(){
            const {name,heroname} = this.props
            return(
                <div>
                    <h1> {name} alyas {heroname}</h1>
                    {props.children}
                </div>
                 
            )
           
        }
    }
    export default Welcome;