import React from 'react';

const Places = () => {
    const places: string[] = ["HEI-IVANDRY", "ALLIANCE-ANDAVAMAMBA", "OTHER"]

    return (
        <div>
            <select className="input" name="place" id="place">
                {places.map((e,k) => (<option key={k} >{e}</option>))}
            </select>
        </div>
    );
};

export default Places;