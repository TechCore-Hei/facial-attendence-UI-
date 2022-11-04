import React, { useReducer, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDataProvider } from '../../context/ApiContext';
import './Login.css';


const Login = () => {
    const [userDetails, setUserDetails] = useState<{username: string, password: string}>({username: "", password:""})
    const { client, setIsAuthentified } = useDataProvider();

    const loginNow = (userDetails:{username: string, password: string}) => {
        client!.post("/login", {
            userDetails
        }).then(response => {
            localStorage.setItem("heiAmin-token", response.data);
            navigate("/event")
            setIsAuthentified(true)
        }).catch(error=>{})
    }

    const navigate = useNavigate()

    return (
        <>
            {localStorage.getItem("heiAdmin-token") ? 
                <Navigate to="/event" /> 
            : 
                <div className="container">
                    <div className="screen">
                        <div className="screen__content">
                            <form className="login">
                                <div className="login__field">
                                    <i className="login__icon fa fa-user"></i>
                                    <input type="text" 
                                        className="login__input" 
                                        placeholder="Nom d'utilisateur / Email"
                                        onChange={(e)=>{userDetails.username = e.target.value}}/>
                                </div>
                                <div className="login__field">
                                    <i className="login__icon fa fa-lock"></i>
                                    <input type="password" 
                                        className="login__input" 
                                        placeholder="Mot de passe"
                                        onChange={(e)=>{userDetails.password = e.target.value}}/>
                                </div>
                                <button className="button login__submit" onClick={()=>loginNow(userDetails)}>
                                    <span className="button__text">Se connecter</span>
                                </button>				
                            </form>
                            <div className="camera-login tooltip" onClick={()=>{navigate("/whoamiface")}}>
                                <a href="#" className="camera-login__icon fa fa-camera" />
                                <span className="tooltiptext">Par reconaissance facial</span>
                            </div>
                        </div>
                        <div className="screen__background">
                            <span className="screen__background__shape screen__background__shape4"></span>
                            <span className="screen__background__shape screen__background__shape3"></span>		
                            <span className="screen__background__shape screen__background__shape2"></span>
                            <span className="screen__background__shape screen__background__shape1"></span>
                        </div>		
                    </div>
                </div>
            }
            
        </>
        
    )
}

export default Login
