import React from 'react';

const NewParticipant = (props:string) => {
    return (
        <div>
            <input type="checkbox" />
            <label>{props}</label>
        </div>
    );
};

export default NewParticipant;