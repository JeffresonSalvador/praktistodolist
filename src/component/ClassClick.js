import React, { Component } from 'react'
import List from './List';
class ClassClick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          term: '',
          items: []
        };
        this.clickHandler = this.clickHandler.bind(this)
      }
    
      onChange = (event) => {
        this.setState({ term: event.target.value });
      }
    
      // to reset textbox in blank
      onSubmit = (event) => {
        event.preventDefault();
        this.setState({
          term: '',
          items: [...this.state.items, this.state.term]
        });

       
      }
      clickHandler(){
        alert("edi wow")
      }
    
      render() {
        return (
          <div>
            <form className="Todolist" onSubmit={this.onSubmit}>

              <input value={this.state.term} onChange={this.onChange} />
              <button>Submit</button>
            </form>
            <List  items={this.state.items}  ></List>

          

          </div>
        );
      }
}
export default ClassClick
