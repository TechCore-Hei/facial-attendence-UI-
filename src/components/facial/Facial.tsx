import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal'
import { useDataProvider } from '../../context/ApiContext';
import './Facial.css'

interface Props {
    buttonLabel: string,
    action: (photo: string)=>void,
    close: ()=>void
}

function Facial(props: Props) {
    const {buttonLabel, action, close} = props;
    const { client } = useDataProvider();
    const [photo, setPhoto] = useState<string>("")
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const photoRef = useRef<HTMLCanvasElement | null>(null);
    const [confirm, setConfirm] = useState<boolean>(false);
    const navigate = useNavigate();

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                audio: false,
                video: {
                    width: 1000,
                    height: 20
                }
            })
            .then(stream => {
                let video = videoRef.current;
                video!.srcObject = stream;
                {video? video!.play().catch((err)=>console.log(err)):""}
            })
    }

    const goPresence = () => {
        client!.post(`/files?file=${photo}`)
            .then(()=>{

            })
            .catch(err => {})
    }

    const takePhoto = () =>{
        const width = 500;
        const height = width / (100/9);
    
        let video:HTMLVideoElement = videoRef.current!;
        let photo:HTMLCanvasElement = photoRef.current!;
    
        photo!.width = width!;
        photo.height = height;
        
        let imageContext = photo.getContext('2d');
        imageContext!.drawImage(video, 0, 0, width, height)
        setPhoto(photo.toDataURL())
    }
    
    useEffect(()=>{
        getVideo();
    }, [videoRef])

    const handleModal = (): void => {
        setConfirm(!confirm)
    }

    return (
        <div className='face__container'>
            <video ref={videoRef} className="face__camera"/>
            <canvas ref={photoRef} style={{ display:'none'}}/>
            <div className='face__button'>
                <button className='face__confirm' onClick={()=>{handleModal(); takePhoto()}}>
                    {buttonLabel}
                </button>
                <button className='face__close' onClick={()=>close()}>
                    Términer
                </button>
            </div>
            <Modal isActive={confirm} 
                handleModal={handleModal}>
                    <div className='confirm-image__presence'>
                        <img src={photo} className='image__result'/>
                        <div className='confirm-image__button'>
                            <button className='confirm-image__launch' onClick={()=>{handleModal(); action(photo)}}>confirmer</button>
                            <button className='confirm-image__close' onClick={()=>{ handleModal()}}>Retour</button>
                        </div>
                    </div>
            </Modal>
        </div>
    )
}

export default Facial