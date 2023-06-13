import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthProvider";
import axios from "axios";

function SignIn() {

    const { login } = useContext(AuthContext)
    const {register, handleSubmit, watch } = useForm();
    const watchEmail = watch('email');
    const watchPassword = watch('password');

    async function getToken(data) {
        try {
            const result = await axios.post('http://localhost:3000/login', {
                email: data.email,
                password: data.password,
            });
            console.log('Received the following from back-end:')
            console.log(result)
            login(result.data.accessToken)

        }catch (e) {
            console.log(e)
        }
    }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleSubmit(getToken)}>
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
            disabled={!watchPassword || !watchEmail}
        >Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;