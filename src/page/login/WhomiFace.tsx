import React from 'react'
import Facial from '../../components/facial/Facial'
import { useDataProvider } from '../../context/ApiContext'
import { useNavigate } from 'react-router-dom';


function WhomiFace() {
    const { client } = useDataProvider()
    const navigate = useNavigate()

    const whoamiface = (photo: string) => {
        client!.post(`/files?file=${photo}`)
        .then(response => {
            localStorage.setItem("heiAdmin-token", response.data)
        })
        .catch(err => {})
    }

    const close = () => {
        navigate("/login")
    }

    return (
        <>
            <Facial buttonLabel="se connecter" action={whoamiface} close={close}/>
        </>
    )
}

export default WhomiFace
