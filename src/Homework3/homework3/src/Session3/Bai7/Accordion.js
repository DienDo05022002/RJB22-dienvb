import React, { useState } from 'react'

export default function Accordion(props) {
    const { data, a } = props;

    const [isActive, setIsActive] = useState(false);
    return (
        <div
            key={`id-${data.id}`}

            onClick={() => setIsActive(!isActive)}>Accordion
            <div className="title mb-3 font-weight-bold"> {data.id} {a.id} </div>
            {isActive && <div className="content">{data.name}</div>}

        </div>
    )
}
