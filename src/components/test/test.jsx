import React, {Component} from 'react';
import './test.css';

class Test extends Component {


    render(){
        {if(this.props.type === 1){
            return (
                <div className="test-container">
                    <div className="test-title">
                        {"Test " + (this.props.testNumber + 1)}
                    </div>
                    <div className="show-list-button">
                                Select Test 
                    </div>
                    <div className="dropdown-texarea-container">
                        <div className="dropdown-container">

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
                    </div>
    
                    <div className="submit-test-button-container">
                        <div className="submit-test-button">
                            test
                        </div>
                    </div>
                </div>
            )
        }else if(this.props.type === 2){
            return (
                <div className="test-container third-test-container">
                    <div className="test-title">
                        {"Test " + (this.props.testNumber + 1)}
                    </div>
                    {/* First Part, without textarea */}
                    <div className="third-test-inner-container"> 

                        {/* second part, with textarea*/}
                        <div className="third-dropdown-textarea-container">
                            
                            <div className="two-dropdowns">
                                <div className="dropdown-container">
                                    <select>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className="dropdown-container">
                                    <select>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>
                            <div className="third-test-text-field-container">
                                <textarea className="text-field-textarea third-test-textarea" name="user_comment"></textarea>
                            </div>
                            
                            <div className="submit-test-button-container third-test-button">
                                <div className="submit-test-button">
                                    test
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            )
        }else if(this.props.type ===3){
            return (
                <div className="test-container third-test-container">
                    <div className="test-title">
                        {"Test " + (this.props.testNumber + 1)}
                    </div>
                    {/* First Part, without textarea */}
                    <div className="third-test-inner-container"> 
                        <div className="dropdown-container">
                            <ul className="checkbox-list">
                                <li className="checkbox-list-item">
                                    <label className="checkbox">
                                        <input type="checkbox" name="checkbox" value="value" />Another Test
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="submit-test-button-container third-test-button">
                                <div className="submit-test-button">
                                    test
                                </div>
                        </div>
                        <br/> <br/> <br/> <br/>  
                        {/* second part, with textarea*/}
                        <div className="third-dropdown-textarea-container">
                            <div className="dropdown-container">
                                <select>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className="third-test-text-field-container">
                                <textarea className="text-field-textarea third-test-textarea" name="user_comment"></textarea>
                            </div>
                            
                            <div className="submit-test-button-container third-test-button">
                                <div className="submit-test-button">
                                    test
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            )
        }
    }
    }
}

export default Test;