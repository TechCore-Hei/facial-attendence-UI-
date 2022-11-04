import React from 'react';

interface Type {
    value : string
}

const Input = (props:Type) => {
    return (
        <div >
           <input className="input" type="text" placeholder={props.value} />
        </div>

    );
};

export default Input;