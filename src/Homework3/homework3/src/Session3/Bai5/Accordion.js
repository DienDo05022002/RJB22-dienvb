import React, { useState } from 'react'

export default function Accordion(props) {
    const { data } = props;

    const [isActive, setIsActive] = useState(false);
    return (
        <div className="buttom__name"
            key={`id-${data.id}`}

            onClick={() => setIsActive(!isActive)}>
            <div className="data__tile"> {data.title} </div>
            {isActive && <div className="data__tile">{data.content}</div>}

        </div>
    )
}
