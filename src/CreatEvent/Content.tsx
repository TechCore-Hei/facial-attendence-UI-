import React, {useRef, useState} from "react";
import Types from "./Types";
import Places from "./Places";
import Responsible from "./Responsibles";
import Participant from "./Participants";
import Input from "./Input";
import "./Style/Style.css";
import { Event } from "../type/event"

function Content() {

    const [type, setType] = useState<boolean>(false);
    const [place, setPlace] = useState<boolean>(false)
    const [responsible, setResponsible] = useState<boolean>(false);
    const eventToCreate: Event = {
        eventName: "",
        eventDescription: "",
        startTime: new Date(),
        endingTime: new Date(),
        place: "",
        responsible: ""
    }

    const [listEvent, setListEvent] = useState<Event[]>([])

    const ChangeType = () => {
        setType(!type)
    }

    const ChangePlace = () => {
        setPlace(!place)
    }

    const ChangeResponsible = () => {
        setResponsible(!responsible)
    }

    const addEvent = () => {
        if(listEvent.includes(eventToCreate!) === false){
            let temp = [...listEvent, ...[eventToCreate]]
            setListEvent(temp)
        }
    }

    const removeFromPanier = (index:number) => {
        listEvent.splice(index, 1)
    }

    return (
        <>
            <div className="body">
                <input type="text" className="title" 
                    placeholder="DESCRIPTION" 
                    onChange={(e)=>{eventToCreate.eventDescription =e.target.value}}/>
                <div className="content">
                    <div className="type">
                        <label htmlFor="type">Type</label>
                        <div className="addChoice">
                            { type ?
                                <input className="input" 
                                    type="text" 
                                    placeholder="add new type"
                                    onChange={(e)=>{eventToCreate.eventName = e.target.value}}/>
                            :
                                <Types/> 
                            }
                            <label onClick={ChangeType} >
                                <button type="button" className="plus">+</button>
                            </label>
                        </div>
                    </div>
                    <div className="place">
                        <label htmlFor="place">Lieu</label><br />
                        <div className="addChoice">
                            {place ? 
                                <input className="input" 
                                    type="text"
                                    placeholder="add new place" 
                                    onChange={(e)=> {eventToCreate.place = e.target.value}}/>
                            : 
                                <Places/>
                            }
                            <label id="1" onClick={()=>ChangePlace()}>
                                <button type="button" className="plus">+</button>
                            </label>
                        </div>
                    </div>
                    <div className="date">
                        <div className="start">
                            <label>Début</label>
                            <input type="datetime-local"/>
                        </div>
                        <div className="end">
                            <label>Fin</label>
                            <input type="datetime-local" />
                        </div>
                    </div>
                    <Participant/>
                    <div className="responsible">
                        <label htmlFor="resp">Responsable</label><br />
                        <div className="addChoice">
                            {responsible ?
                                <input className="input" 
                                    type="text" 
                                    placeholder="add new responsible"
                                    onChange={(e)=>{ eventToCreate.responsible = e.target.value}}/>
                            : 
                                <Responsible/>
                            }
                            <label onClick={()=>ChangeResponsible()} >
                                <button type="button" className="plus">+</button>
                            </label>
                        </div>
                    </div>
                    <p className="obligation">
                        Obligatoire <input type="checkbox" name="colors" value="" />
                    </p>
                    <div className="output">
                        {listEvent.map((elt, index)=>(
                            <>
                                <div className="event-panier" key={elt.eventDescription}>
                                    <div className="event-panier_description">{elt.eventDescription}</div>
                                    <i className="fa fa-close event-panier_remove" onClick={()=>{removeFromPanier(index)}}/>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="button">
                        <button type="button" className="add" onClick={()=>{addEvent()}}>Ajouter</button>
                        <button type="button" className="create">Créer</button>
                        <button type="button" value="" className="cancel">Annuler</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Content;