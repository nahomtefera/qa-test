import React, {Component} from 'react';
import './test.css';

class Test extends Component {


    render(){
        return (
            <div className="test-container">
                <div className="test-title">
                    {"Test " + (this.props.testNumber + 1)}
                </div>
                <div className="dropdown-container">
                    <div className="show-list-button">
                        Select Test 
                    </div>
                    <ul className="checkbox-list">
                        {this.props.checkboxes.map((checkboxes, index)=>{
                            return (
                                <li key={index} className="checkbox-list-item">
                                    <label className="checkbox" key={index}>
                                        <input type="checkbox" name="checkbox" value="value" />{checkboxes}
                                    </label>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="text-field-container">
                    <textarea className="text-field-textarea" name="user_comment"></textarea>
                </div>

                <div className="submit-test-button">
                    test
                </div>
            </div>
        )
    }
}

export default Test;