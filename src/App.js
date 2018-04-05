import React, { Component } from 'react';
import './App.css';
import Test from './components/test/test';


class App extends Component {

  constructor(props){
      super(props);

      this.state={
       tests: [
          {
            checkboxes: ["test 1", "test 2", "test 3"]
          },
          {
            checkboxes: ["test 4", "test 5", "test 6"]
          },
          {
            checkboxes: ["test 7", "test 8", "test 9"]
          }
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
                  <Test testNumber={index} key={index} checkboxes={test.checkboxes}/>
                </div>
              )
            })
          }
          <div className="submit-all-tests-button">
            Submit all tests
          </div>
      </div>
    );
  }
}

export default App;
