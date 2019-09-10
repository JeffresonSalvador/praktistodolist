import React, { Component } from 'react'
import List from './List';

class ClassClick extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          items: []
        };
        
        this.addItem = this.addItem.bind(this);
        this.deleted = this.deleteItem.bind(this);
      }
    
     
    
      // to reset textbox in blank
      // onSubmit = (event) => {
      //   event.preventDefault();
      //   this.setState({
      //     term: '',
      //     items: [...this.state.items, this.state.term]
      //   });
      // }

     

      //to add item
      addItem(e){
        if(this.inputTodo.value !== ""){
          var newItem = {
            text: this.inputTodo.value,
            key: Date.now()
          };
          this.setState((prevState)=>{
            return{
              items: prevState.items.concat(newItem)
            };
          });

        }
        this.inputTodo.value = "";

        console.log(this.state.items);
        
        e.preventDefault();
      }
      //to delete item
      
    deleteItem(key) {
      console.log("Key: in deleteItem: " + key);
      console.log("Items at delete:" + this.state.items);

      var filteredItems = this.state.items.filter(function (item){
      return(item.key !== key)
     });

     this.setState({
      items: filteredItems
      });
    }
    
      render() {
        return (
          <div className="content">
            <div className="header">

                <h1>
                  TodoList Application
                </h1>
            </div>
            <div>
            <form className="Todolist"  onSubmit={this.addItem}>

              <input ref={(a) => this.inputTodo = a} placeholder= "Enter what to do" />

                <button  type="submit">Submit</button>
                </form>

           {/* <List  items={this.state.items}  ></List> */}

          
            </div>

              <List entries={this.state.items}
              delete={this.deleted} ></List>
          </div>
        );
      }
}
export default ClassClick;
