import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count: 0
         }
     }
     increment(){
        //  this.setState({
        //     count: this.state.count +1 
        //  }
        //  ,()=>{
        //      console.log('call back value',this.state.count)
        //  }
        //  ) 
        this.setState( prevState=> ({
            count: prevState.count +1
            
        }
        ))
        
        // console.log(this.prevState.count);
     }
         
     incrementfive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
     }
    render() {
        return (
            <div>
                  <div>  count - {this.state.count}</div>
                  <button onClick={()=> this.increment()}>Increment</button>
                  <button onClick={()=> this.incrementfive()}>Increment five</button>
            </div>
        )
    }
}

export default Counter
