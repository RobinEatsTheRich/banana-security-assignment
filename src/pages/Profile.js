import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthProvider";

function Profile() {

    const { isAuth } = useContext(AuthContext)

  return (
    <>
      <h1>Profielpagina</h1>
      <section>
        <h2>Gegevens</h2>
          {/*I mean now that I've made the usernames & emails, I GOTTA make them a little functional.*/}
        <p><strong>Gebruikersnaam:</strong> {isAuth.user.username}</p>
        <p><strong>Email:</strong> {isAuth.user.email}</p>
      </section>
      <section>
        <h2>Strikt geheime profiel-content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
      </section>
      <p>Terug naar de <Link to="/">Homepagina</Link></p>
    </>
  );
}

export default Profile;