import React, {useRef, useState} from 'react';

const Participant = () => {

    let ParticipantList = ["Administrateur","Professeur","G1","G2","H1","H2"];
    

    let Details = ()=>{
        return<fieldset className="four">
            <legend>Participants</legend>
            {ParticipantList.map((e,k)=>
    <div>
        <input id={e} type="checkbox" /><label htmlFor={e} key={k} >{e}</label>
    </div>)}
        </fieldset>
    }
    const [modal,setModal] = useState(<Details/>)
    const [state,setState] = useState(false)


    const showInput = ()=>{
        if(!state){
            setState(true)
            setModal(<NewParticipant/>)
        }
        if(state) {
            setState(false)
            setModal(<Details/>)
        }
    }

    const NewParticipant = () => {
        const inputRef = useRef<any>(null);
        const [submit, setSubmit] = useState("");

        const handleClick = () => {
        setSubmit(inputRef.current.value);
        };
        console.log(submit)
        console.log(ParticipantList)
        return (
            <div>
                <input ref={inputRef} type="text"/>
                <button onClick={handleClick}>Add</button>
            </div>
        );
    };

    return (
        <>
        {modal}
        <button onClick={()=>showInput()} > + </button>
        </>
    );
};

export default Participant;