import React from "react";
import "../CSS/style.css";
import Inactivescale from "../Assets/Inactivescale.svg";
import scale from "../Assets/scale.svg";
import { OptionType } from "../Components/optionType"

export class Dashboard extends React.Component {
  
  constructor(props) {

        super(props);
        this.state = {
            unitType1: ['Length'],
            unit1: ['Inch', 'Feet', 'Yard', 'Centimeter'],
            options:[],
            openImg: false,
            imagetrue:true,
            openImg1: false,
            imagetrue1:true,
        };
    }
    handleColorToggle = () => {
      this.setState({ openImg: !this.state.openImg });
      console.log(this.state.openImg);
    }
    handleColorToggle1 = () => {
      this.setState({ openImg1: !this.state.openImg1 });
      console.log(this.state.openImg1);
    }
    handleColorToggle2 = () => {
      this.setState({ openImg2: !this.state.openImg2 });
      console.log(this.state.openImg2);
    }
    handleToggle=()=>{
      this.setState({ imagetrue: !this.state.imagetrue });
    }
    handleToggle1=()=>{
      this.setState({ imagetrue1: !this.state.imagetrue1 });
    }
    handleToggle2=()=>{
         this.setState({ imagetrue2: !this.state.imagetrue2 });
    }
    componentDidMount(){
      this.lengthOption();
    }
    lengthOption=()=>{
       this.setState({options:this.state.unit1});
      console.log(this.state.options);

    }

    temperatureOption=()=>{
      this.setState({options:this.state.unit2});
      console.log("temperature array",this.state.options);
    }
    volumeOption=()=>{
      this.setState({options:this.state.unit3});
      console.log(this.state.options);
    }

render() {
    return (
    <div class="main">
      <div class="topbar-container"> 
        <div class="quanment">Quanment</div>
        <div/> 
      </div> 
      <div class="header-container">
         <span class="header-text" align="center">Welcome To Quantity Measurement</span>
      </div>
      <div class="header">
        <span class="header-span">CHOOSE TYPE</span>
      </div>
      <div class="home"> 
      {
        this.state.openImg ? 
        <div class="length"  onClick={()=>this.lengthOption()}
           onMouseOver={this.handleColorToggle}
                          onMouseLeave={this.handleColorToggle}
                ><img src={scale}  class="lengthimage" alt="Length"/>Length</div>:
          <div class="image1" onClick={()=>this.lengthOption()}
           onMouseOver={this.handleColorToggle}
                onMouseLeave={this.handleColorToggle}
          ><img src={Inactivescale} class="lengthimage" alt="Length"/>Length</div>
      }    
          <OptionType Units={this.state.options}/>
          
      </div>
    </div>
    )
  }
}