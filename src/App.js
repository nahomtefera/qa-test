import React, { Component } from 'react';
import './App.css';
import Test from './components/test/test';


class App extends Component {

  constructor(props){
      super(props);

      this.state={
       tests: [
          {
            checkboxes: ["test 1", "test 2", "test 3"],
            type: 1
          },
          {
            checkboxes: ["test 4"],
            type: 2
          },
          {
            checkboxes: ["test 5", "test 6", "test 7"],
            type: 3
          },
        ]
      }
  }


  render() {
    return (
      <div className="App">
          {
            this.state.tests.map((test, index)=>{
              return (
                <div className="external-test-container"> 
                  <Test testNumber={index} type={test.type} key={index} checkboxes={test.checkboxes}/>
                </div>
              )
            })
          }

          <div className="submit-all-tests-button-container">
            <div className="submit-all-tests-button">
              Submit all tests
            </div>
          </div>
      </div>
    );
  }
}

export default App;
