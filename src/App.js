import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import {AuthContext} from "./context/AuthProvider";
import Error from "./pages/Error";

function App() {

    const { isAuth } = useContext(AuthContext)

    return (
        <>
            <NavBar/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {isAuth && <Route path="/profile" element={<Profile/>} />}
                    <Route path="/signin" element={<SignIn/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/*" element={<Error/>} />
                </Routes>
            </div>
        </>
    );
}

export default App;
