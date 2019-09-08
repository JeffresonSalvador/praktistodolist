import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Test'
import Welcome from './component/Welcome'
import Message from './component/Message';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
                                {/* <header className="App-header">
                                  <img src={logo} className="App-logo" alt="logo" /> */}
        <p>

          <Message/>
          <Counter/>                        

                                hello
                                <Greet name = "jeffpogi" heroname="SuperPogi">
                                  <p>this is superhuman</p>  </Greet>
                                
                                <Welcome name = "jeffpogi" heroname="SuperPogi">
                                <p>this is superhuman</p>
                                </Welcome>


        </p>

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
