import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);



        this.createTasks = this.createTasks.bind(this);
       
    }

    createTasks(item) {

         return (
    <div className="laman">
         <li key={item.key} >
            
            <h3 className="sulat">{item.text}</h3>
           
            <button className="close"onClick={() =>
                this.delete(item.key)}>X</button>
            </li> 
           </div>
         )
     }

        delete(key){
         console.log("Key is:" + key);
         this.props.delete(key);
       }

    render () {

        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="listahan">

                {listItems}
                
            </ul>
        );
    }
}

export default List;