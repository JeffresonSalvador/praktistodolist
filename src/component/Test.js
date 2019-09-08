import React from 'react'


// function Greet(){

//     return <h1>Hello po</h1>

// }

    const Greet = (props) =>{
        const {name,heroname} = props
        
        return  (
            <div>
                <h1> 
                    hello {name} a.k.a {heroname}
                    
                </h1>
                {props.children}

            </div>
        
        )
    } 

export default Greet;