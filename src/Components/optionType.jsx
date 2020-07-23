import React from "react";
import "../CSS/optiontype.css";

export class OptionType extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedUnitType: '',
            inputValue: '',
            outputValue: '',
        };
    }
    
render() {
    
    return (
    <div className='box'>
                <br/>
                <div className="form">FROM <br/>
                    <input className="input" type={"number"} value={this.state.inputValue} ></input>
                    <br/>
                    <select className="select" value={this.state.inputUnit}>
                    
                    </select>
                </div>
                <div className="form"> TO <br/>
                    <input className="output" type={"number"} value={this.state.outputValue} ></input><br/>
                    <select className="outputselect" value={this.state.outputUnit} >                       
                    </select>
                </div>
            </div>
    )
  }
}