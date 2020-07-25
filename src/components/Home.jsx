import React, { Component } from 'react';

class Home extends Component { 
    render() {
        
        const units = ['Length', 'Temparature', 'Volume']  
        
        return (
            <div className='quantities-container'>
                <div className='type'>
                    <div>CHOOSE TYPE</div>
                </div>
                <div className='quantities'>
                    {units.map( unit => <Unit unitType={unit} />)}    
                </div>
            </div>
        )
    }
}

export default Home;