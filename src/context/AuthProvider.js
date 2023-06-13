import React, { createContext, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import jwtDecode from "jwt-decode";

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {

    const [ isAuth, setIsAuth ] = useState({
        auth: false,
        user:{
            email: '',
            id: ''
        }})
    const navigate = useNavigate();

    function login( token ){
        localStorage.setItem('token', token);
        const decodedToken = jwtDecode(token)

        setIsAuth({
            auth: true,
            user:{
                email: decodedToken.email,
                id: decodedToken.sub
            }})
        console.log(`gebruiker is ingelogd! als:`)
        console.log(isAuth.user)
        navigate('/profile')
    }


    function logout(){
        localStorage.removeItem('token');
        setIsAuth({
            auth: false,
            user:{
                email: '',
                id: ''
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