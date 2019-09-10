import React from 'react';
import logo from './logo.svg';
import './App.css';

import FunctionClick from './component/FunctionClick';
import classclick from './component/ClassClick';
import ClassClick from './component/ClassClick';
import EventBind from './EventBind';
import ParentComponent from './component/ParentComponent';

import Message from './component/Message';
import TodoList from './component/TodoList';

function App() {
  return (
    <div className="App">


      <TodoList/> 
      {/* <ClassClick ></ClassClick> */}

      {/* <Message/> */}

      
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}

      {/* <ClassClick></ClassClick> */}
      
      {/* <p>

      <Message/>
      <Counter/>                        

      hello
      <Greet name = "jeffpogi" heroname="SuperPogi">
        <p>this is superhuman</p>  </Greet>

      <Welcome name = "jeffpogi" heroname="SuperPogi">
      <p>this is superhuman</p>
      </Welcome>


      </p>
       */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}


          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
    </div>
  );
}

export default App;
