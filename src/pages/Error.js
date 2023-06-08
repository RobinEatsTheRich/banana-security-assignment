import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Error() {

    return (
        <>
            <h1>404</h1>
            <p>Deze pagina kan niet worden gevonden</p>

            <p>Klik <Link to="/">hier</Link> om terug te gaan naar de home pagina.</p>
        </>
    );
}

export default Error;