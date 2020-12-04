
import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            arrayInput : "Separate Values by ,",
            array : ""
        }
        this.onTextChange = this.onTextChange.bind(this);
        this.onArrayCreate = this.onArrayCreate.bind(this);
    }

    render() {
        return (
            <div className="App">
                <div>
                <header >
                    Sorting Visualized
                </header>
                </div>
                <div className="expectInput" style={{display: "block"}}>
                    <span>Input the values for the array:</span><br/>
                    <textarea defaultValue={this.state.arrayInput} onChange={this.onTextChange}></textarea><br/>
                    <button value="Create Array" onClick={this.onArrayCreate}>Create Array</button>
                </div>
            </div>

        )
            ;
    }

    onTextChange(event){
        this.setState({arrayInput: event.target.value});
    }

    onArrayCreate(event){
        let newArray = this.state.arrayInput.split(",");
        newArray = newArray.sort();

    }
}

export default App;
