import React from 'react'

 
 function clickHandler(){
   
 }


const List = props => (
  <ul >
    {
        
      props.items.map((item, index) =>{
       
       function clickHandler(){
            props.deleted(index);
      }
     


      return <div>
        <li  onClick={clickHandler}className="listahan" key={index}>{item}</li>
       </div>
     
      })
    }
  </ul>
)

export default List;
