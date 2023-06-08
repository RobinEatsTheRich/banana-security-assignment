import React, { createContext, useState } from 'react';
import { useNavigate  } from 'react-router-dom';

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {

    const [ isAuth, setIsAuth ] = useState({
        auth: false,
        user:{
            email: '',
            username: '',
            password: ''
        }})
    const navigate = useNavigate();

    function login( email, username, password){
        setIsAuth({
            auth: true,
            user:{
                email: email,
                username: username,
                password: password
            }})
        console.log(`gebruiker is ingelogd! als:`)
        console.log(isAuth.user)
        navigate('/profile')
    }
    function logout(){
        setIsAuth({
            auth: false,
            user:{
                email: '',
                username: '',
                password: ''
            }})
        console.log("gebruiker is uitgelogd!")
        navigate('/')
    }

    const data = {
        isAuth,
        setIsAuth,
        login,
        logout
    }

    return(
        <AuthContext.Provider value={data}>
            { children }
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;