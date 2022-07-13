import React, { Component } from 'react';
import './Bai5.css'

class Bai5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    }

    render() { 
        const arrayContent = [
                {
                 name:"Simple Panels",
                 content: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'            
                },
                {
                 name:"Toggle Information",
                 content: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'            
                },
            
                {
                 name:"Nice Touch",
                 content: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'            
                },
            
                {
                 name:"Simple Panels",
                 content: '5Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'            
                },
            
                {
                 name:"Toggle Information",
                 content: '6Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'            
                },

                {
                 name:"Nice Touch",
                 content: '7Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'            
                },
        ]
        
        return (
            <div className="main">
                <div className="col">
                    <div> 
                    <div>{arrayContent.map((data, index) => (
                        <div className="buttom__name"
                        key={index}
                        onClick={() => {
                            this.setState ({content: data.content}).add("<div>{this.state.content}</div>")
                        }}
                        >{data.name}</div>
                    ))}<div className="text__content active">{this.state.content}</div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bai5;