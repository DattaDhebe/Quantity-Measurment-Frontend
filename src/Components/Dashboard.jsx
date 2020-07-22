import React from "react";
import "../CSS/style.css";
import Inactivescale from "../Assets/Inactivescale.svg";
import scale from "../Assets/scale.svg";

export class Dashboard extends React.Component {
  
  constructor(props) {
        super(props);
        this.state = {
            lengthImg: false,
        };
    }
    
  render() {
        return (
              <div class="main">
                <div class="topbar-container"> 
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
                      this.state.lengthImg ? 
                      <div class="length"  
                              ><img src={scale}  class="lengthimage" alt="Length"/>Length</div>:
                        <div class="image1" 
                      >
                      <img src={Inactivescale} class="lengthimage" alt="Length" />Length</div>
                    }

              
                </div>
        </div>
        )
  }
}