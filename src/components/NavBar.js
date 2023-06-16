import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../assets/banana-01.png';

import {AuthContext} from "../context/AuthProvider";

function NavBar() {
    const navigate = useNavigate();
    const { isAuth, logout } = useContext(AuthContext)

    return (
        <nav>
            <Link to="/">
                <span className="logo-container">
                    <img src={logo} alt="logo"/>
                    <h3>
                        Banana Security
                    </h3>
                </span>
            </Link>

            { isAuth.auth &&
            <div>
                {/*These buttons are visible when authorized*/}
                <button
                    type="button"
                    onClick={() => { navigate('/Profile') }}
                >
                    Profiel Pagina
                </button>
                <button
                    type="button"
                    onClick={() => {
                        logout();
                        navigate('/');
                    }}
                >
                    Log Uit
                </button>
            </div>
            }
            { !isAuth.auth &&
            <div>
                {/*These buttons are visible when NOT authorized*/}
                <button
                    type="button"
                    onClick={() => { navigate('/signin') }}
                >
                    Log in
                </button>
                <button
                    type="button"
                    onClick={() => { navigate('/signup') }}
                >
                    Registreren
                </button>
            </div>
            }
        </nav>
    );
}

export default NavBar;