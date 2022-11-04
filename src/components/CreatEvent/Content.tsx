import React, {useRef, useState} from "react";
import Types from "./Types";
import Places from "./Places";
import Responsible from "./Responsibles";
import Input from "./Input";
import "./Style/Style.css";

function Content() {

    const [state, setState] = useState<boolean>(false)
    //const [view_Type, setView_type] = useState(<Types />)
    const [view_Place, setView_place] = useState(<Places />)
    const [view_Responsible, setView_responsible] = useState(<Responsible />)


    const Edit = () => {

        return (
            <>
                <button type="button" className="plus">+</button>
            </>
        )
    }

    const ChangeType = () => {
        if (!state) {
            return ()=>{
                    setState(true)
                }
        }
        if (state) {
           return ()=>{
                setState(false)
            }
        }
    }
    const ChangePlace = () => {

        if (!state) {
            setState(true)
            setView_place(<Input value="Add new place" />)

        }
        if (state) {
            setState(false)
            setView_place(<Places />)
        }
    }
    const ChangeResponsible = () => {
        if (!state) {
            setState(true)
            setView_responsible(<Input value="Add new responsible" />)
        }
        if (state) {
            setState(false)
            setView_responsible(<Responsible/>)
        }
    }

    console.log(state)
    return (
        <>
            <div className="body">
                <input type="text" className="title" placeholder="DESCRIPTION" />
                <div className="content">
                    <div className="type">
                        <label htmlFor="type">Type</label>
                        <div className="addChoice">
                            { ChangeType() ? <Types/> : <Input value="Add new type" /> }
                            <label onClick={ChangeType} ><Edit/></label>
                        </div>
                    </div>
                    <div className="place">
                        <label htmlFor="place">Place</label><br />
                        <div className="addChoice">
                            {view_Place}
                            <label id="1" onClick={ChangePlace} ><Edit /></label>
                        </div>
                    </div>
                    <div className="date">
                        <div className="start">
                            <label>Start</label>
                            <input id="event" type="date" name="eventdate" />
                        </div>
                        <div className="end">
                            <label>End</label>
                            <input id="event" type="date" name="eventdate" />
                        </div>
                    </div>
                    <fieldset className="participants">
                        <legend>Participants</legend>
                        <div>
                            <input type="checkbox" id="admin" name="scales" />
                            <label htmlFor="admin">Administrator</label>
                        </div>
                        <div>
                            <input type="checkbox" id="teacher" name="horns" />
                            <label htmlFor="teacher">Teacher</label>
                        </div>
                        <div>
                            <input type="checkbox" id="g1" name="horns" />
                            <label htmlFor="g1">G1</label>
                        </div>
                        <div>
                            <input type="checkbox" id="g2" name="horns" />
                            <label htmlFor="g2">G2</label>
                        </div>
                        <div>
                            <input type="checkbox" id="h1" name="horns" />
                            <label htmlFor="h1">H1</label>
                        </div>
                        <div>
                            <input type="checkbox" id="h2" name="horns" />
                            <label htmlFor="h2">H2</label>
                        </div>
                    </fieldset>
                    <div className="responsible">
                        <label htmlFor="resp">Responsible</label><br />
                        <div className="addChoice">
                            {view_Responsible}
                            <label onClick={ChangeResponsible} ><Edit /></label>
                        </div>
                    </div>
                    <p className="obligation">
                        Mandatory <input type="checkbox" name="colors" value="" />
                    </p>
                    <div className="output">

                    </div>
                    <div className="button">
                        <button type="button" className="add" >Add</button>
                        <button type="button" className="create">Create</button>
                        <button type="button" value="" className="cancel">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Content;