import React, { useState, useEffect } from 'react';
import { useDataProvider } from '../context/ApiContext';

const Places = () => {
    const { client } = useDataProvider();
    const [ place, setPlace] = useState<string[]>(["HEI-Ivandry"])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getPlace = ()=>{
        client!.get("/places")
            .then(response=> {
                setPlace(response.data)
            })
    }

    useEffect(() => {
        getPlace()
    }, [getPlace])

    return (
        <div>
            <select className="input" name="place" id="place">
                {place?.map((e,k) => (<option key={k} >{e}</option>))}
            </select>
        </div>
    );
};

export default Places;