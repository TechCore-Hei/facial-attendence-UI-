import React from 'react';

interface Type {
    inputRef : string,
    inputValue : string
}

const Types = (/**props:Type*/) => {
    const Type_List: string[] = ["Course", "Meet", "Party"];
   // const {inputRef,inputValue} = props

    return (
        <div>
            <select className="input" /**ref={inputRef} value={inputValue}*/ >
                {Type_List.map((e,k) => (<option key={k} value={e}> {e} </option>))}
            </select>
        </div>
    );
};

export default Types;