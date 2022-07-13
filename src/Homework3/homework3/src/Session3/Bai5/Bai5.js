import './Bai5.css';
import React, { useState } from "react";
import Accordion from './Accordion';

const arrayContent = [
    {
        title: "Simple Panels",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        title: "Toggle Information",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        title: "Nice Touch",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
]

export default function Bai5() {
    const [content ,setContent] = useState(1);
        
        return (
            <div>
                {arrayContent.map((data, id) => {
                    return (
                        <Accordion key = {`id: ${id}`} data={data}></Accordion>
                    )
                }) }
                <div onClick={() => setContent(content)}></div>
            </div>
        );
    }    