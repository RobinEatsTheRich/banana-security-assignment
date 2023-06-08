import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthProvider";

function SignIn() {

    const { login } = useContext(AuthContext)
    const {register, handleSubmit } = useForm();

    function onFormSubmit(data) {
        login(data.email, data.email, data.password)
    }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleSubmit(onFormSubmit)}>
          <label htmlFor="emailInput">Email-adres</label>
          <input
              type="text"
              id="emailInput"
              {...register("email")}
          />
          <label htmlFor="passwordInput">Wachtwoord</label>
          <input
              type="password"
              id="passwordInput"
              {...register("password")}
          />
        <button
            type="submit"
        >Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;