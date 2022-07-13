import React, { useState } from 'react';
import Accordion from './Accordion'

const array = [
    { id: 1, name: "badien1" },
    { id: 2, name: "badien2" },
    { id: 3, name: "badien3" },
    { id: 4, name: "badien4" },
    { id: 5, name: "badien5" }];

export default function Bai7() {
    const [isActive, setIsActive] = useState(0);
    return (
        <div>bai7
            {array.map((data, id) =>{
                return (
                    <Accordion key = {`id: ${id}`} data={data} a='a'></Accordion>
                )
            })}
            <button onClick={() => setIsActive(isActive)}></button>
        </div>
    )
}

