import React from "react";
import "../CSS/dashboard.scss";
import Inactivescale from "../Assets/Inactivescale.svg";
import scale from "../Assets/scale.svg";
import hot from "../Assets/hot.svg";
import beaker from "../Assets/beaker.svg";
import Inactivehot from "../Assets/Inactivehot.svg";
import Inactivebeaker from "../Assets/Inactivebeaker.svg";
import {OptionType} from './optionType'

export class Dashboard extends React.Component {
  constructor(props) {

        super(props);
        this.state = {
            unitType1: ['Length'],
            unit1: ['Inch', 'Feet', 'Yard', 'Centimeter'],
            unitType2: ['Temperature'],
            unit2: ['Celsius', 'Fahrenheit','Kelvin'],
            unitType3: ['Volume'],
            unit3: ['Liter', 'Gallon', 'Millilitre'],
            options:[],
            openImg: false,
            imagetrue:true,
            openImg1: false,
            imagetrue1:true,
            openImg2: false,
            imagetrue2:true
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
    <div className="main">
      <div className="topbar-container"> 
        <div className="quanment">Quanment</div>
        <div/> 
          <div className="history">History</div>
      </div> 
      <div className="header-container">
         <span className="header-text" align="center">Welcome To Quantity Measurement</span>
      </div>
      <div className="header">
        <span className="header-span">CHOOSE TYPE</span>
      </div>
      <div className="home"> 
      {
        this.state.openImg ? 
        <div className="length"  onClick={()=>this.lengthOption()}
           onMouseOver={this.handleColorToggle}
                          onMouseLeave={this.handleColorToggle}
                ><img src={scale}  className="lengthimage" alt="Length"/>Length</div>:
          <div className="image1" onClick={()=>this.lengthOption()}
           onMouseOver={this.handleColorToggle}
                onMouseLeave={this.handleColorToggle}
          ><img src={Inactivescale} className="lengthimage" alt="Length"/>Length</div>
      }

      {
        this.state.openImg1 ? 
          <div className="temperature" onClick={()=>this.temperatureOption()}
            onMouseOver={this.handleColorToggle1 }
                onMouseLeave={this.handleColorToggle1 }
              ><img src={hot}  className="tempimage" alt="Temperature"/>Temperature</div>:
          <div className="image2" onClick={()=>this.temperatureOption()}
           onMouseOver={this.handleColorToggle1 }
                onMouseLeave={this.handleColorToggle1 }
            ><img src={Inactivehot}  className="tempimage" alt="Temperature"/>Temperature</div>
      }  

      {
        this.state.openImg2 ? 
        <div className="volume"  onClick={()=>this.volumeOption()}
           onMouseOver={this.handleColorToggle2}
                          onMouseLeave={this.handleColorToggle2}
                ><img src={beaker}  className="volumeimage" alt="Volume"/>Volume</div>:
          <div className="image3" onClick={()=>this.volumeOption()}
           onMouseOver={this.handleColorToggle2}
                onMouseLeave={this.handleColorToggle2}
          ><img src={Inactivebeaker}  className="volumeimage" alt="Volume"/>Volume</div>
      }
          <OptionType Units={this.state.options}/>
          
      </div>
    </div>
    )
  }
}